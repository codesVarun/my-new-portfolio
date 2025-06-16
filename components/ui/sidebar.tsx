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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close sidebar on desktop resize
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handleResize = () => {
      if (mediaQuery.matches) setMobileOpen(false);
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button (Top-Right on Mobile) */}
      <div className="fixed top-4 right-4 z-50 sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-primary hover:bg-primary/80"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar (Mobile only, under the icon) */}
      {mobileOpen && (
        <aside
          className="
            fixed top-16 right-4 z-40 sm:hidden 
            bg-primary border border-border shadow-xl rounded-xl p-2 
            flex flex-col space-y-2 w-48
            transition-all animate-in fade-in slide-in-from-top-2
          "
        >
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 w-full justify-start"
                onClick={() => setMobileOpen(false)} // close after navigation
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </Button>
            </Link>
          ))}
        </aside>
      )}

      {/* Desktop Sidebar (unchanged) */}
      <aside className="hidden sm:flex fixed z-50 p-2 top-4 right-4 border border-border bg-primary shadow-lg rounded-xl flex-col space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href}>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 group w-full"
            >
              <Icon className="h-5 w-5" />
              <span className="whitespace-nowrap text-sm font-medium hidden sm:inline">
                {label}
              </span>
            </Button>
          </Link>
        ))}
      </aside>
    </>
  );
}