"use client";

import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "codesVarun/utils/constants/contact.constants";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-muted-foreground">
      <h1 className="text-4xl font-bold text-primary">Contact</h1>

      <div className="space-y-6">
        {/* Phone */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {CONTACT_INFO.phone.label}
          </h2>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="w-5 h-5 text-primary" />
            <span className="text-lg">{CONTACT_INFO.phone.number}</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {CONTACT_INFO.email.label}
          </h2>
          <div className="flex items-center space-x-3">
            <MailIcon className="w-5 h-5 text-primary" />
            <a
              href={CONTACT_INFO.email.mailto}
              className="text-lg hover:underline"
            >
              {CONTACT_INFO.email.address}
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {CONTACT_INFO.linkedin.label}
          </h2>
          <div className="flex items-center space-x-3">
            <LinkedinIcon className="w-5 h-5 text-primary" />
            <Link
              href={CONTACT_INFO.linkedin.url}
              target="_blank"
              className="text-lg hover:underline"
            >
              {CONTACT_INFO.linkedin.display}
            </Link>
          </div>
        </div>

        {/* GitHub */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            {CONTACT_INFO.github.label}
          </h2>
          <div className="flex items-center space-x-3">
            <GithubIcon className="w-5 h-5 text-primary" />
            <Link
              href={CONTACT_INFO.github.url}
              target="_blank"
              className="text-lg hover:underline"
            >
              {CONTACT_INFO.github.display}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}