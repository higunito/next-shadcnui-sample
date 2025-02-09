import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs + TypeScript + shadcn/ui Sample App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn("bg-slate-300 antialiased min-h-screen" ,
          notoSansJP.variable)}
        // className={`${notoSansJP.variable} bg-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
