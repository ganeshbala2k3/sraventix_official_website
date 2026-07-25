import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/chat/WhatsAppWidget";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Workforce Transformation Through Learning`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sraventix Technologies LLP is a technology & workforce development company bridging education, technology, and industry through lifelong, outcome-driven, framework-based learning.",
  keywords: [
    "Sraventix Technologies",
    "workforce development",
    "EdTech India",
    "DevOps course",
    "Cloud Computing course",
    "MERN Stack course",
    "Python course",
    "Digital Marketing course",
    "HR course",
    "Taxation course",
    "Accounting course",
    "skill development Ongole",
    "L.E.A.P. framework",
  ],
  applicationName: SITE_NAME,
  category: "education",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Workforce Transformation Through Learning`,
    description:
      "Bridging education, technology, and industry through lifelong, outcome-driven, framework-based learning for students, professionals, and organizations.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sraventix Technologies LLP — Transforming potential into professional excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Workforce Transformation Through Learning`,
    description:
      "Outcome-driven technical and management programs — DevOps, Cloud, MERN, Python, HR, Digital Marketing, Taxation, and Accounting.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#334155]">
        <GoogleAnalytics />
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
