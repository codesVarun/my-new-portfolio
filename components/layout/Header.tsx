import Link from "next/link";
import { Button } from "codesVarun/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyPortfolio
        </Link>
        <nav className="flex space-x-4">
          <Link href="#about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="#projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="#contact">
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
