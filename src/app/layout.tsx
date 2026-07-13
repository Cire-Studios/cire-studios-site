import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const display = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cire Studios",
  description:
    "A product studio shipping web apps, mobile apps and games, board games, and books.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/logo-mark-nav.png", type: "image/png" },
    ],
    apple: "/brand/logo-mark-nav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${display.variable} ${sans.variable} font-sans antialiased bg-background text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
