
import "./globals.css";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-vibes" });

export const metadata = { title: "Akhard Haus - Luxury Stay in Buea" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${vibes.variable}`}>
      <body>{children}</body>
    </html>
  );
        }
