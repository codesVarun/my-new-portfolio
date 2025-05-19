import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "codesVarun/components/layout/Footer";
import Sidebar from "codesVarun/components/ui/sidebar";
import Image from "next/image";
import { Card, CardContent } from "codesVarun/components/ui/card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varun Singh",
  description: "This website is a portfolio website of varun and it manages by varun.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidebar />

        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] max-w-6xl w-full gap-6">
              {/* Profile Card */}
              <aside className="flex justify-center lg:justify-start">
                <Card className="overflow-hidden text-center w-full max-w-xs">
                  <Image
                    src="/profile.jpg"
                    alt="Varun Singh"
                    width={300}
                    height={300}
                    className="object-cover w-full h-72"
                  />
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold">Varun Singh</h2>
                    <p className="text-muted-foreground">Data Engineer & Full Stack Developer</p>
                  </CardContent>
                </Card>
              </aside>

              {/* Divider */}
              <div className="hidden lg:block w-px bg-white/20 h-full" />

              {/* Page Content */}
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}