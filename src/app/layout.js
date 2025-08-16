import { Inter } from "next/font/google";
import "./globals.scss";
// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'App Nova Landing Page',
  description: 'Your landing page description here',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
