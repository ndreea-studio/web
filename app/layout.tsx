import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";



const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ndreea.studio - Weaving Digital Dreams",
    description: "A creative studio where imagination meets innovation. We craft digital wonders that captivate and inspire.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${robotoMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
