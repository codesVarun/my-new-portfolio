import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

import Footer from "codesVarun/components/layout/Footer";
import Sidebar from "codesVarun/components/ui/sidebar";
import Image from "next/image";
import { Card, CardContent } from "codesVarun/components/ui/card";

import { siteMetadata, SOCIAL_LINKS } from "codesVarun/utils/constants/layout.constants";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />

        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 flex justify-center min-h-screen px-4 sm:px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] max-w-6xl w-full gap-6 items-start">
              <aside className="flex flex-col items-center space-y-4 mt-10">
                <Card className="overflow-hidden text-center w-full max-w-xs">
                  <Image
                    src="/profile.jpg"
                    alt="Varun Singh"
                    width={300}
                    height={300}
                    className="object-cover w-full h-72"
                  />
                  <CardContent className="p-4 space-y-2">
                    <div>
                      <h2 className="text-xl font-bold">Varun Singh</h2>
                      <p className="text-muted-foreground">
                        Data Engineer & AI/ML Explorer
                      </p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-2">
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition-colors"
                      >
                        <TwitterIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        <FacebookIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              <div className="hidden lg:block w-px bg-white/20 h-full" />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}