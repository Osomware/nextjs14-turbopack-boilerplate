import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Provider from "./_trpc/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "NextJS 14 + Turbopack + tRPC Boilerplate",
  description:
    "My boilerplate using NextJS 14, Turbopack, tRPC, Tanstack, and Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={poppins.className}>{children}</body>
      </Provider>
    </html>
  );
}
