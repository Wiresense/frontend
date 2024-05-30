import { ActionIcon, Affix, Popover, Stack, createTheme, mergeMantineTheme, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoon, IconPaintFilled, IconSun } from "@tabler/icons-react";

import { useTheme } from '@/app/Theme';

export default function ThemeSettings() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const { setTheme } = useTheme();

    return (
        <Affix position={{ bottom: 20, left: 20 }}>
            <Popover width="5vh" trapFocus position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <ActionIcon
                        size="xl"
                    >
                        <IconPaintFilled />
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>

                    <Stack align="center">
                        <ActionIcon
                            size="3vh"
                            onClick={() => {
                                setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
                            }}
                            variant="default"
                        >
                            <IconSun color='var(--mantine-color-yellow-4)' display={colorScheme == 'light' ? "none" : "block"} />
                            <IconMoon color='var(--mantine-color-blue-6)' display={colorScheme == 'dark' ? "none" : "block"} />
                        </ActionIcon>
                        {
                            Object.keys(theme.colors).map((color, index) => (
                                <ActionIcon size="3vh" key={index} color={color} variant="filled" onClick={() => {
                                    const newTheme = createTheme({
                                        primaryColor: color
                                    })

                                    setTheme(mergeMantineTheme(theme, newTheme))
                                }} />
                            ))
                        }
                    </Stack>
                </Popover.Dropdown>
            </Popover>
        </Affix>
    )
}