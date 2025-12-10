import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./globals.css";

// Using system font stack to avoid external Google Fonts fetch in build

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
      <body className={"min-h-screen flex flex-col font-sans"}>
        <Nav />
        <main className="flex-1 container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
