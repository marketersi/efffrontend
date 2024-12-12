"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/organisms/footer/Footer";
import { Provider } from "react-redux";
import store from "@/store/store";
//import { ReactLenis } from "@studio-freight/react-lenis";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Provider store={store}>
        {/* <ReactLenis 
        root options={{ 
          duration:0.5,
          smoothWheel:true,
          }}> */}

         {children} 
        {/* </ReactLenis> */}
          
          
          </Provider>
        <Footer />
      </body>
    </html>
  );
}
