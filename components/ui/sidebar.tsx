"use client";

import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { Button } from "codesVarun/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 👇 Automatically close sidebar when resizing to desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMobileOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-primary hover:bg-primary/80"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          fixed z-50 p-2 border border-border bg-primary shadow-lg rounded-xl transition-all duration-300
          flex flex-col space-y-2
          ${
            mobileOpen ? "left-4 bottom-20" : "left-[-300px]" // fully hide offscreen
          }
          sm:left-auto sm:bottom-auto sm:right-4 sm:top-4
        `}
      >
        <nav>
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 group w-full"
                onClick={() => setMobileOpen(false)} // auto close on link click
              >
                <Icon className="h-5 w-5" />
                <span
                  className={`whitespace-nowrap transition-all duration-200 text-sm font-medium
                    ${
                      hovered || mobileOpen
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
    </>
  );
}
