import type { Metadata } from "next";
import {Geist, Geist_Mono, Raleway} from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "400"
})

export const metadata: Metadata = {
  title: "Malawi Shades | Discover the Warm Heart of Africa",
  description: "Your premier platform for finding accommodations and tourism experiences in Malawi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${raleway.className}`}>
              <div className=" min-h-screen bg-gray-100 flex-col ">
                  <Header />
                      <main className="">{children}</main>
                  <Footer />
              </div>
          </body>
      </html>
  );
}
