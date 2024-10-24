 
import './globals.css';
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import { Providers } from "./providers"
import {StarknetProvider} from "@/components/starknet-provider";


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
          <StarknetProvider>
          {children}
          </StarknetProvider>
        </Providers>
      </body>
    </html>
  );
}
