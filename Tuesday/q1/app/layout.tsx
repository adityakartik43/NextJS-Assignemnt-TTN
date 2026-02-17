import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 bg-white shadow-md z-50">
          <Header />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-gray-100 border-t">
          <Footer />
        </footer>

      </body>
    </html>
  );
}
