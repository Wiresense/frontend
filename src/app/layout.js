import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import Theme from './Theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Wiresense",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={inter.className}>
				<Theme>
					{children}
				</Theme>
			</body>
		</html>
	);
}
