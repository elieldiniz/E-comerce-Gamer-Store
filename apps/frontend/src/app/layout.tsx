import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"


const font = Montserrat({
  subsets: ["latin"],
  display: "swap"
})


export const metadata: Metadata = {
  title: "StoreGamer",
  description: "loja StoreGamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
