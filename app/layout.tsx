import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meridian Estate Watch | Professional Property Monitoring",
  description:
    "Meridian Estate Watch provides professional estate watch and property monitoring services in Charlotte, NC. Protect your second home, vacation property, or estate while you're away.",
  keywords:
    "estate watch, property monitoring, vacant home, second home, snowbird, estate management, Charlotte NC",
  openGraph: {
    title: "Meridian Estate Watch",
    description:
      "Professional estate watch services protecting your property while you're away.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
