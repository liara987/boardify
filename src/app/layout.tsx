import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/components/query-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boardify",
  description: "App to manage your team tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
