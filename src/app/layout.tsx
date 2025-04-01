import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEIZED - Scrap Mechanic Chapter 2",
  description: "This website has been seized by law enforcement",
  openGraph: {
    type: "website",
    title: "SEIZED - Scrap Mechanic Chapter 2",
    description: "This website has been seized by law enforcement",
    url: "https://scrapmechanic.net/chapter-2",
    siteName: "Scrap Mechanic Chapter 2",
    locale: "en_US",
    countryName: "United States",
    images: [
      {
        url: "http://81.172.212.158:25565/scrap-mechanic-seized.jpg",
        width: 1200,
        height: 630,
        alt: "SEIZED - Scrap Mechanic Chapter 2",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
