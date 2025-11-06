import type { Metadata } from "next";
import { Geist, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Clean and modular Next.js starter project",
  keywords: ["Next.js", "React", "SEO", "App Router"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myapp.com",
    siteName: "MyApp",
  },
  twitter: {
    card: "summary_large_image",
    site: "@myapp",
    creator: "@myapp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ovo.variable} font-ovo antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
