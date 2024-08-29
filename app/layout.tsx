import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/landing-page/Footer";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathMaster",
  description: "Learn math interactively and visualy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const session = await auth()

  console.log(session)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={session?.user!}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
