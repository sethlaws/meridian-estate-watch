import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://meridianestatewatch.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Estate Watch Services in Charlotte, NC | Meridian Estate Watch",
    template: "%s | Meridian Estate Watch",
  },
  description:
    "Professional estate watch and property monitoring in Charlotte, NC and surrounding areas — Lake Norman, Ballantyne, Waxhaw and more. We protect your second home, vacation property, or estate while you're away. Free consultation.",
  keywords: [
    "home watch Charlotte NC",
    "home watch services Charlotte",
    "house watching Charlotte",
    "property monitoring Charlotte NC",
    "second home watch Charlotte",
    "vacation home watch",
    "snowbird home watch North Carolina",
    "estate watch Charlotte",
    "Lake Norman home watch",
    "Cornelius home watch",
    "Davidson home watch",
    "Huntersville home watch",
    "Mooresville home watch",
    "Ballantyne home watch",
    "Waxhaw home watch",
    "Weddington home watch",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Estate Watch Services in Charlotte, NC | Meridian Estate Watch",
    description:
      "Professional estate watch services protecting your Charlotte-area property while you're away.",
    url: SITE_URL,
    siteName: "Meridian Estate Watch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/estate-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Meridian Estate Watch — Charlotte, NC estate watch services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Watch Services in Charlotte, NC | Meridian Estate Watch",
    description:
      "Professional estate watch services protecting your Charlotte-area property while you're away.",
    images: ["/estate-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Meridian Estate Watch",
  description:
    "Professional estate watch and property monitoring services for second homes, vacation properties, and estates in Charlotte, NC and surrounding communities.",
  url: SITE_URL,
  telephone: "+1-704-879-1198",
  email: "info@meridianestatewatch.com",
  image: `${SITE_URL}/estate-hero.jpg`,
  logo: `${SITE_URL}/logo.svg`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Charlotte", "@id": "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" },
    { "@type": "City", name: "Cornelius" },
    { "@type": "City", name: "Davidson" },
    { "@type": "City", name: "Huntersville" },
    { "@type": "City", name: "Mooresville" },
    { "@type": "City", name: "Waxhaw" },
    { "@type": "City", name: "Weddington" },
    { "@type": "City", name: "Marvin" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
