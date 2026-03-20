import "@/styles/globals.css";

import { Playfair_Display, DM_Sans } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ficus & Flowers | Premium Floral Arrangements & Events",
  description: "Discover our stunning collection of premium flower arrangements and professional event decoration services.",
  icons: [
    {
      rel: "icon",
      url: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/favicon/favicon-logo.png",
      type: "image/png"
    },
    {
      rel: "apple-touch-icon",
      url: "https://lsilheqheeohjnqwspgn.supabase.co/storage/v1/object/public/favicon/favicon-logo.png"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#1B3A2D" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <Navbar/>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
