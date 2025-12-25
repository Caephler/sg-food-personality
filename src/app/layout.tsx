import type { Metadata } from "next";
import { Long_Cang, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Chinese font for text
const longCang = Long_Cang({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-long-cang",
});

// BBH Bogle font for headings (English Display font from local file)
const bbhBogle = localFont({
  src: "../styles/fonts/BBH-Bogle.ttf",
  variable: "--font-bbh-bogle",
  display: "swap",
});

// English Text font for body text
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Local Singaporean Food Personality Quiz",
  description: "Discover which iconic Singaporean dish matches your personality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${longCang.variable} ${bbhBogle.variable} ${lato.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
