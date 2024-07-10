"use client";

import { useState, useEffect, useRef } from "react";
import ThemeSettings from "@/app/components/ThemeSettings";
import SensorWidget from "@/app/components/SensorWidget";
import { Accordion, ActionIcon, Anchor, Code, Divider, Group, List, Modal, NumberInput, Space, Stack, Text, TextInput } from "@mantine/core";
import { useField } from "@mantine/form";
import { IconBrandChrome, IconBrandFirefox, IconDeviceFloppy, IconPlugConnected, IconPlugConnectedX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
	const [ws, setWs] = useState(null);
	const [wsState, setWsState] = useState(WebSocket.CLOSED);
	const [sensors, setSensors] = useState({});
	const [maxDisplayed, setMaxDisplayed] = useState(50);
	const [opened, { open, close }] = useDisclosure(false);
	const [currentUrl, setCurrentUrl] = useState('');

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

			ws.onmessage = (event) => {
				const sensorData = JSON.parse(event.data);
				updateSensorData(sensorData, maxDisplayed);
			};

			ws.onerror = (event) => {
				setWsState(WebSocket.CLOSED)

				ws?.close();
			};
		}

		return () => {
			ws?.close();
			setSensors({});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ws]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrentUrl(window.location.href);
		}
	}, []);


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
				if (err instanceof DOMException && err.message.includes('insecure')) {
					ws?.close();
					open();
				}

				console.error(err.message);

				resolve("Can't reach wiresense client. Check if IP is valid and client can be reached!");
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

			<Modal opened={opened} onClose={close} title="Update Settings" centered>
				<Text>
					Modern browsers prevent connections to ws (WebSocket) URLs when accessed from HTTPS sites due to security protocols. To resolve this issue and enable the tool&aps;s functionality, please follow our guides below to update your settings and allow these connections:
				</Text>
				<Accordion multiple defaultValue={[
					(typeof navigator !== 'undefined' && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) ? 'chrominum' : null,
					(typeof InstallTrigger !== 'undefined') ? 'firefox' : null
				].filter(value => value !== '')}>
					<Accordion.Item value="chrominum">
						<Accordion.Control icon={<IconBrandChrome />}>
							Chrome / Edge / Opera
						</Accordion.Control>
						<Accordion.Panel>
							<List type="ordered" withPadding>
								<List.Item>Click on the padlock icon <Code>🔒</Code> or the <Code>Secure</Code> label in the address bar.</List.Item>
								<List.Item>Click on <Code>Site settings</Code>; </List.Item>
								<List.Item>Under <Code>Insecure conten</Code>, select <Code>Allow</Code></List.Item>
								<List.Item><Anchor href={currentUrl}>Reload</Anchor> the page to apply settings.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="firefox">
						<Accordion.Control icon={<IconBrandFirefox />}>
							Firefox
						</Accordion.Control>
						<Accordion.Panel>
							<List type="ordered" withPadding>
								<List.Item>Open Firefox and type <Code>about:config</Code> in the address bar, then press Enter.</List.Item>
								<List.Item>Accept the risk warning if prompted.</List.Item>
								<List.Item>Search for <Code>network.websocket.allowInsecureFromHTTPS</Code>.</List.Item>
								<List.Item>Set <Code>network.websocket.allowInsecureFromHTTPS</Code> to <Code>true</Code> by double-clicking it or using the context menu.</List.Item>
								<List.Item><Anchor href={currentUrl}>Reload</Anchor> the page to apply settings.</List.Item>
							</List>
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<Space h="xs" />
				<Text>
					If you&apos;re uncertain about making changes, you can always revert them later after using the tool.
				</Text>
			</Modal>

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
