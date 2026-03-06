import type { Metadata } from "next";
import { Bebas_Neue, Baloo_2 } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin", "devanagari"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cinema Cafe & Restaurant | Vijayawada",
  description:
    "Cinema Cafe & Restaurant in Moghalrajapuram, Vijayawada – Where every bite feels like a scene. Enjoy coffee, continental food, Chinese cuisine, and fast food with a unique cinema-themed ambience.",
  keywords: [
    "Cinema Cafe",
    "Vijayawada",
    "cafe restaurant",
    "Moghalrajapuram",
    "coffee",
    "continental food",
    "cinema theme",
  ],
  openGraph: {
    title: "Cinema Cafe & Restaurant | Vijayawada",
    description: "Where every bite feels like a scene.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${baloo.variable}`}>
      <body className="antialiased overflow-x-hidden font-baloo">{children}</body>
    </html>
  );
}
