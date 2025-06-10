"use client";

import { Button } from "codesVarun/components/ui/button";
import { Download } from "lucide-react";
import { HOME_PAGE_CONTENT } from "codesVarun/utils/constants/home.constants";

export default function HomePage() {
  return (
    <>
      {/* Intro Section: Left-Aligned */}
      <section className="flex flex-col justify-center px-6 py-12 text-left">
        <h1 className="text-4xl font-bold mb-4">
          {HOME_PAGE_CONTENT.heading.split(HOME_PAGE_CONTENT.highlightedName)[0]}
          <span className="text-primary">{HOME_PAGE_CONTENT.highlightedName}</span>
          {HOME_PAGE_CONTENT.heading.split(HOME_PAGE_CONTENT.highlightedName)[1]}
        </h1>
        <p className="text-xl max-w-xl leading-relaxed text-muted-foreground">
          {HOME_PAGE_CONTENT.description}
        </p>
      </section>

      {/* Download Section: Center-Aligned */}
      <section className="flex justify-center py-6">
        <a href={HOME_PAGE_CONTENT.cvDownloadLink} download>
          <Button
            variant="ghost"
            className="text-white border border-white bg-transparent hover:bg-white hover:text-black transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </a>
      </section>
    </>
  );
}