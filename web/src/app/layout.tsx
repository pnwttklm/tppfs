import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from '../components/nav'

const inter = JetBrains_Mono({ weight: ['100','200','300','400','500','600','700', '800'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TPPFS",
  description: "#1 Used Car Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="logo.svg" />
        <link rel="apple-touch-icon" href="apple-icon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Nav/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
