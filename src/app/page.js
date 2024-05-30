"use client";

import { useState, useEffect, useRef } from "react";
import ThemeSettings from "@/app/components/ThemeSettings";
import SensorWidget from "@/app/components/SensorWidget";
import { ActionIcon, Divider, Group, NumberInput, Space, Stack, TextInput } from "@mantine/core";
import { useField } from "@mantine/form";
import { IconDeviceFloppy, IconPlugConnected, IconPlugConnectedX } from "@tabler/icons-react";

export default function Home() {
	const [ws, setWs] = useState(null);
	const [wsState, setWsState] = useState(WebSocket.CLOSED);
	const [sensors, setSensors] = useState({});
	const [maxDisplayed, setMaxDisplayed] = useState(50);

	const maxDisplayedRef = useRef(maxDisplayed);
	maxDisplayedRef.current = maxDisplayed

	const ipField = useField({
		initialValue: 'localhost:8080',
		validateOnChange: false,
		validate: connect
	});


	useEffect(() => {
		if (ws) {
			ws.onopen = () => setWsState(WebSocket.OPEN);
			ws.onclose = () => setWsState(WebSocket.CLOSED);
			ws.onerror = () => setWsState(WebSocket.CLOSED);

			ws.onmessage = (event) => {
				const sensorData = JSON.parse(event.data);
				updateSensorData(sensorData, maxDisplayed);
			};
		}

		return () => {
			ws?.close();
			setSensors({});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ws]);

	function updateSensorData(sensor) {
		const { key, data } = sensor;
		setSensors((prevSensors) => {
			const newSensors = { ...prevSensors };
			if (!newSensors[key]) {
				newSensors[key] = [];
			}
			newSensors[key].push(data);
			while (newSensors[key].length > maxDisplayedRef.current) {
				newSensors[key].shift(); // Remove the oldest entry
			}
			return newSensors;
		});
	};


	function connect(value) {
		return new Promise((resolve) => {
			try {
				ws?.close();
				setSensors({});
				const newWs = new WebSocket(`ws://${value}`);
				setWs(newWs);
				resolve(null);
			} catch (err) {
				resolve("Can't reach wiresense client. Check if IP is valid and client can be reached!");
				console.error(err);
			}
		});
	}

	function disconnect() {
		ws?.close();
		setSensors({});
	}

	return (
		<>
			<ThemeSettings />

			<Group justify="center" grow>
				<TextInput
					required
					{...ipField.getInputProps()}
					variant="filled"
					label="IP of the Wiresense Client"
					placeholder="localhost:8080"
					rightSection={
						wsState === WebSocket.OPEN ? (
							<ActionIcon onClick={disconnect} color="red">
								<IconPlugConnectedX />
							</ActionIcon>
						) : (
							<ActionIcon onClick={ipField.validate}>
								<IconDeviceFloppy />
							</ActionIcon>
						)
					}
					leftSection={
						wsState === WebSocket.OPEN ? (
							<IconPlugConnected color="green" />
						) : (
							<IconPlugConnectedX color="red" />
						)
					}
				/>
				<NumberInput
					value={maxDisplayed}
					onChange={(value) => {
						if (value >= 5 && value <= 100) {
							setMaxDisplayed(value)
						}
					}}
					min={5}
					max={100}
					label="Max. ammount of data per graph"
				/>
			</Group>

			<Divider my="md" label="Settings" />

			{/* Create <SensorWidget /> for every sensor */}
			<Stack align="stretch">
				{Object.entries(sensors).map(([key, data]) => (
					<SensorWidget key={key} sensorkey={key} data={data} ip={ipField.getValue()} />
				))}
			</Stack>
		</>
	);
}
