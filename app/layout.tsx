import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ABAkids Palermo",
  description: "Centro ABA a Palermo",
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

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-J0TDV5BE25"
   strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JQTDVSEB2S');
    `}
  </Script>
</body>
  </html>
);
}