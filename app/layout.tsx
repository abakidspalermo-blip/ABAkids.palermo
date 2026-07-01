import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABAKids Palermo",
  description:
    "Centro Cognitivo-Comportamentale ABAKids Palermo. Riabilitazione, Promozione Sociale e Supporto Educativo.",
  verification: {
    google: "srJG8R-c00KxEJ0BN2K17eTsmvhRsBUm-i7Qr5KiHkk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-screen flex flex-col">
      <Navbar />
      {children}
    </body>
  </html>
);
}