import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSG, SSR API Fetching & Simple Authentication",
  description:
    "simple fetching data and displaying it using SSG, SSR and using simple auth for simple use authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
