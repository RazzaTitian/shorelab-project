import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "@/templates/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShoreLab Foundation",
  description: "A website for the seas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MyNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
