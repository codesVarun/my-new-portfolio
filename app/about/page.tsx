"use client";

import { ABOUT_CONTENT } from "codesVarun/utils/constants/about.constants";
import { useRef } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-muted-foreground">
      <h1 className="text-4xl font-bold text-primary">About Me</h1>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="max-h-[60vh] overflow-y-auto pr-2 space-y-10 custom-scrollbar"
      >
        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
          <ul className="list-disc list-inside space-y-2">
            {ABOUT_CONTENT.education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            {ABOUT_CONTENT.experience.map((job, index) => (
              <li key={index}>
                {job.title} at <strong>{job.company}</strong> <br />
                <span className="text-sm text-muted-foreground">
                  {job.duration}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {ABOUT_CONTENT.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Hobbies & Interests */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Hobbies & Interests
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {ABOUT_CONTENT.hobbies.map((hobby, index) =>
              typeof hobby === "string" ? (
                <li key={index}>{hobby}</li>
              ) : (
                <li key={index}>
                  <strong>{hobby.category}:</strong>
                  <ul className="list-disc list-inside ml-6">
                    {hobby.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center py-4">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-primary hover:underline"
          >
            <ArrowUpIcon className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
}