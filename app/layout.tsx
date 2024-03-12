import type { Metadata } from "next";
import "./globals.css";

import { inter, poppins } from "./theme/fonts";

export const metadata: Metadata = {
  title: "Kapampangan Cuisine",
  description: "Discover and explore the flavors of Kapampangan Cuisine",
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
