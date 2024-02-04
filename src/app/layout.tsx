import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Abhinav P. Singh",
  description: "A Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/></head>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
