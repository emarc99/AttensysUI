 
import './globals.css';
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { StarknetConfig, argent, braavos, publicProvider, useInjectedConnectors, voyager } from "@starknet-react/core"


// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AttenSys',
  description: 'certify and verify',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" > 
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
