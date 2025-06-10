"use client";

import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-muted-foreground">
      <h1 className="text-4xl font-bold text-primary">Contact</h1>

      <div className="space-y-6">
        {/* Mobile */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Phone</h2>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="w-5 h-5 text-primary" />
            <span className="text-lg">+91 80779 66845</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Email</h2>
          <div className="flex items-center space-x-3">
            <MailIcon className="w-5 h-5 text-primary" />
            <a
              href="mailto:singhvarun9554@gmail.com"
              className="text-lg hover:underline"
            >
              singhvarun9554@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">LinkedIn</h2>
          <div className="flex items-center space-x-3">
            <LinkedinIcon className="w-5 h-5 text-primary" />
            <Link
              href="https://www.linkedin.com/in/codesVarun/"
              target="_blank"
              className="text-lg hover:underline"
            >
              linkedin.com/in/codesVarun
            </Link>
          </div>
        </div>

        {/* GitHub */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">GitHub</h2>
          <div className="flex items-center space-x-3">
            <GithubIcon className="w-5 h-5 text-primary" />
            <Link
              href="https://github.com/codesVarun"
              target="_blank"
              className="text-lg hover:underline"
            >
              github.com/codesVarun
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}