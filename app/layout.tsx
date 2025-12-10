import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indústria Farmacêutica - Perfusão IV",
  description:
    "Empresa especializada em produtos farmacêuticos para perfusão intravenosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Nav />
        <main className="flex-1 container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
