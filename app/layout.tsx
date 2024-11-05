import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import About0 from "./about0";
import About1 from "./about1";
import About2 from "./about2";

export const metadata: Metadata = {
  title: "About us",
  description: "Desciption",
};

const inter = Poppins({
  weight: ["400","700"],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <About0/>
        <About1/>
        <About2 />
      </body>
    </html>
  );
}
