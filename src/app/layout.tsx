import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";



const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "DevAsif",
  description: "Meet Asif, a passionate Full Stack Developer specializing in React, Next.js, and Node.js. Discover my skills, philosophy, and professional journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={roboto.className}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
