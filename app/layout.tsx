import type { Metadata } from "next";
import "./globals.css";

import { inter, poppins } from "./theme/fonts";

export const metadata: Metadata = {
  title: "Explore Pampanga",
  description: "Unveiling local treasures",
};

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
