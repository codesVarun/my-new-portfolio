"use client";

import Link from "next/link";
import { useRef } from "react";
import { listProjects } from "../data-access/api";
import { Project } from "codesVarun/utils/types/types";
import { ArrowUpIcon } from "lucide-react";

const ProjectsPage = () => {
  const projects: Project[] = listProjects();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-muted-foreground">
      <h1 className="text-4xl font-bold text-primary">Projects</h1>

      {/* Scrollable Projects Container */}
      <div
        ref={scrollRef}
        className="max-h-[60vh] overflow-y-auto pr-2 space-y-8 custom-scrollbar"
      >
        {projects.map((project) => (
          <div key={project.projectId} className="space-y-3 border-b pb-6">
            <h2 className="text-2xl font-semibold text-white">
              {project.projectName}
            </h2>
            <p className="text-sm leading-relaxed">
              {project.projectDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {project.projectRepoLink && (
                <Link
                  href={project.projectRepoLink}
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View Repository
                </Link>
              )}
              {project.projectLiveUrl && (
                <Link
                  href={project.projectLiveUrl}
                  target="_blank"
                  className="text-sm text-green-500 hover:underline"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}

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
};

export default ProjectsPage;
