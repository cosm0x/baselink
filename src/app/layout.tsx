import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { type ReactNode } from "react";
import { cookieToInitialState } from "wagmi";
import { getConfig } from "@/lib/wagmi";
import WagmiProvider from "@/providers/wagmi-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import Pancake from "../components/Pancake";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Base Link",
  description: "Create free USDT payment links in seconds",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get("cookie")
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <WagmiProvider initialState={initialState}>
            <Pancake>
              <Navbar />
              <main className="px-4 py-4 mb-24 lg:py-0">{props?.children}</main>
              <Toaster />
              <MobileNav />
              <Footer />
            </Pancake>
          </WagmiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
