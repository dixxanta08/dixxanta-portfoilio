import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dixanta Nath Shrestha - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in the MERN stack. Building scalable, maintainable web applications with modern technologies.",
  keywords: [
    "MERN Stack",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
  ],
  authors: [{ name: "Dixanta Nath Shrestha" }],
  openGraph: {
    title: "Dixanta Nath Shrestha - Full-Stack Developer",
    description: "Full-Stack Developer specializing in the MERN stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
