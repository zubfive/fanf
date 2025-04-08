import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Header from "./_components/navbar";

export const metadata: Metadata = {
  title: "Ficus and Flowers | Premium Floral Arrangements & Events",
  description: "Discover our stunning collection of premium flower arrangements and professional event decoration services.",
  icons: [
    // Use the favicon-logo.png directly as the main favicon
    { 
      rel: "icon", 
      url: "/images/favicon/favicon-logo.png", 
      type: "image/png"
    },
    // For iOS devices
    { 
      rel: "apple-touch-icon", 
      url: "/images/favicon/favicon-logo.png" 
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta name="theme-color" content="#8a4baf" />
      </head>
      <body>
        {/* To create proper favicon: Visit /favicon.html and take screenshot */}
        <Header/>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
