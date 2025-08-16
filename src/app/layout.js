import localFont from "next/font/local";
import "./globals.css";
import Aside from "@/components/Aside";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Robert's Portfolio",
  description: "Nunoo-Mensah Robert's web developer portfolio showcasing React, Node.js, and MongoDB projects.",
  keywords: "web developer, React portfolio, Node.js, MongoDB"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Aside />

        {children}
      </body>
    </html>
  );
}
