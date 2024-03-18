import type { Metadata } from "next";
import type { Viewport } from 'next';
import "./styles/globals.css";
import Header from "@/app/_components/ui/header";
import Footer from "@/app/_components/ui/footer";

export const metadata: Metadata = {
  title: "ABMLab 채용사이트",
  description: "ABMLab 채용사이트 메인페이지입니다",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
