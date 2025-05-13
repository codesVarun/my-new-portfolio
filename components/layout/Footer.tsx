export default function Footer() {
    return (
      <footer className="w-full border-t bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} codesVarun. All rights reserved.
        </div>
      </footer>
    );
  }
  