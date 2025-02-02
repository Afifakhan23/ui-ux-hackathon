import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import Providers from "@/app/redux/provider"; // Corrected import

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Best Furniture Online",
  description: "Discover premium quality furniture for your home and office at the best prices.",
  keywords: "FurniOra, online store, home decor, luxury furniture, affordable furniture,ui ux hackathon,hackathon,wood furniture,cheap furniture",
  authors: {
    name: "Afifa Khan",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers> {/* Wrap Redux Provider correctly */}
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

