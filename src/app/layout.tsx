import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demokratia Youth Parliament",
  description:
    "Professional event website for Demokratia Youth Parliament registrations, speakers, committees, and founder vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

