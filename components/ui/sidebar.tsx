"use client";

import { Home, User, Briefcase, Mail } from "lucide-react";
import { Button } from "codesVarun/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed top-4 right-4 z-50 bg-primary shadow-lg rounded-xl p-2 border border-border transition-all duration-300"
    >
      <nav className="flex flex-col space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href}>
            <Button variant="ghost" className="flex items-center space-x-2 group">
              <Icon className="h-5 w-5" />
              <span
                className={`whitespace-nowrap transition-all duration-200 text-sm font-medium
                ${
                  hovered
                    ? "opacity-100 ml-2"
                    : "opacity-0 w-0 overflow-hidden"
                } hidden sm:inline`}
              >
                {label}
              </span>
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}