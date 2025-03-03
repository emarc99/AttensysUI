"use client"; // Mark as Client Component
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AutoConnect } from "@/components/connect/AutoConnect";
import { RouterHandler } from "@/components/RouterHandler";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          <Providers>
            <Header />
            <AutoConnect />
            {/* <RouterHandler> */}
            {children}
            {/* </RouterHandler> */}
            <Footer />
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
