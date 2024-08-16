import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import SessionWrapper from "@/components/session-wrapper";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "UrbanStay | Discover & Book Unique Rental Properties - Apartments, Homes, & More",
  description:
    "Explore and book unique stays with UrbanStay. Find the perfect rental property, from cozy apartments to stylish homes, in top urban destinations. Easy booking, secure transactions, and a seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className + " "}>
        <link rel="icon" href="/image/dark-logo.svg" />
        <SessionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
