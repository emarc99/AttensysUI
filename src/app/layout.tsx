"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AutoConnect } from "@/components/connect/AutoConnect";
import { universalloadingstatus } from "@/state/connectedWalletStarknetkitNext";
import { useAtom } from "jotai";
import { RouterHandler } from "@/components/RouterHandler";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [universalLoad, setuniversalLoad] = useAtom(universalloadingstatus);
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          {/* {universalLoad &&  <Loading /> } */}
          <Providers>
            {/* <RouterHandler> */}
            <Header />
            <AutoConnect />
            {children}
            <Footer />
            {/* </RouterHandler> */}
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
