import React, { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "../context/AppContext";
import Script from "next/script";
// import 'text-encoding';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

// components
import Navbar from "@/components/navbar/Navbar";
import TopHeader from "@/components/topHeader/TopHeader";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discount Hub",
  description: "Discount Hub",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-X0WYX329V6`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X0WYX329V6');
          `}
        </Script>
      </head>
      <AppProvider>
        <body className={inter.className}>
          <TopHeader />
          <Navbar />
          <main className=" bg-slate-200 min-h-screen items-start w-full lg:flex  lg:justify-center">
            <div className="w-full px-4 py-8 lg:w-10/12 lg:flex-col  2xl:w-8/12">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
