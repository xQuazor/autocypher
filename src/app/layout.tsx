import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "@/components/navigation/component";
import Footer from "@/components/footer/component";

export const metadata: Metadata = {
  title: "Auto-CyPheR",
  description: "Research Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{position: "relative"}}>
      <Navigation/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
