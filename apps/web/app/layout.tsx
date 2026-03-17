import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verses of Rahman",
  description: "AR Rahman music universe — explore the galaxy of sound",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} bg-cosmic-bg text-cosmic-graylt antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
