export default function Footer() {
  return (
    <footer className="w-full border-t bg-black text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs sm:text-sm md:text-base text-white/70">
        &copy; {new Date().getFullYear()} codesVarun. All rights reserved.
      </div>
    </footer>
  );
}