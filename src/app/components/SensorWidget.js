import { LineChart } from "@mantine/charts";
import { ActionIcon, Card, Group, Space, Text } from "@mantine/core";
import { IconCamera, IconDownload, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { toPng } from 'html-to-image';
import { useRef, useState } from "react";

export default function SensorWidget(props) {
    const graphRef = useRef(null);

    const data = props.data.map((obj, index, array) => {
        const countDown = array.length - index - 1;
        return { ...obj, i: -countDown };
    });

    // Extract all keys from the data objects (except 'i')
    const keys = Object.keys(props.data[0]).filter(key => key !== 'i');

    // Generate unique colors for each key
    const colors = generateUniqueColors(keys.length);

    // Create the series array with names and colors
    const series = keys.map((key, index) => ({
        name: key,
        color: colors[index % colors.length] // Ensure cycling through colors
    }));

    const saveGraph = () => {
        toPng(graphRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "graph.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Card>
            <Group>
                <Text>{props.sensorkey.toUpperCase()}</Text>
                <ActionIcon color="violet" onClick={saveGraph} >
                    <IconCamera />
                </ActionIcon>
                <ActionIcon
                    color="green"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.target = "_blank" // Fix for firefox auto ws close on <a> click 
                        link.href = `http://${props.ip}/${encodeURIComponent(props.sensorkey)}/data.csv`;
                        link.click();
                    }}
                >
                    <IconDownload />
                </ActionIcon>

            </Group>
            <Space h="xs" />
            <LineChart
                ref={graphRef}
                h={400}
                data={data}
                dataKey="i"
                series={series}
                withLegend
            />
        </Card>
    );
}

// Function to generate unique colors based on the number of keys
function generateUniqueColors(count) {
    const availableColors = ['indigo.6', 'red.6', 'green.6', 'blue.6', 'yellow.6', 'purple.6', 'cyan.6', 'teal.6', 'lime.6', 'pink.6'];
    return availableColors.slice(0, count);
}
