"use client";

import { Button } from "codesVarun/components/ui/button";
import { Download } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Intro Section: Left-Aligned */}
      <section className="flex flex-col justify-center px-6 py-12 text-left">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I&rsquo;m <span className="text-primary">Varun Singh</span>
        </h1>
        <p className="text-xl max-w-xl leading-relaxed text-muted-foreground">
          I&rsquo;m a passionate <strong>Data Engineer</strong> and <strong>Full Stack Developer</strong> building robust backend systems and elegant frontend experiences. I specialize in designing scalable data pipelines, optimizing database performance, and ensuring efficient data workflows. On the frontend, I craft intuitive, responsive interfaces using modern frameworks like React and Next.js. With a strong foundation in cloud technologies, containerization, and CI/CD practices, I bridge the gap between development and operations to deliver reliable, end-to-end solutions.
        </p>
      </section>

      {/* Download Section: Center-Aligned */}
      <section className="flex justify-center py-6">
        <a href="/Varun_Singh_CV.pdf" download>
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