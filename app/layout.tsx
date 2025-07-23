import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/components/navbar";

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BootCamp 1.0 | SkillGrid.ng",
  description:
    "Point them young to the right direction, we will teach your child to build real apps and games that work.",
  openGraph: {
    title: "BootCamp 1.0 | SkillGrid.ng",
    description:
      "Point them young to the right direction, we will teach your child to build real apps and games that work.",
    url: "https://skillgrid.ng",
    siteName: "SkillGrid.ng",
    images: [
      {
        url: "/assets/og-image.jpg",
        secureUrl: "https://skillgrid.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkillGrid BootCamp 1.0",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BootCamp 1.0 | SkillGrid.ng",
    description:
      "Point them young to the right direction, we will teach your child to build real apps and games that work.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "SkillGrid",
    "BootCamp",
    "Kids Coding Bootcamp",
    "Learn to Code",
    "Tech Skills for Kids",
    "Coding for Children",
    "Programming Bootcamp",
    "Web Development for Kids",
    "Game Development for Kids",
    "Tech Education",
    "Digital Skills for Kids",
    "Empowering Young Coders",
    "Future Tech Leaders",
    "SkillGrid.ng",
  ],
  authors: [
    {
      name: "Tavershima Achir",
      url: "https://achirtavershima.com.ng",
    },
    {
      name: "David Nienge",
      url: "https://davidnienge.com.ng",
    },
  ],
  creator: "Tavershima Achir",
  themeColor: "#000000",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://skillgrid.ng",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/atom.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}

        {/* NoScript fallback for Meta Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
