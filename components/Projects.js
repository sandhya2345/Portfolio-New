"use client";
import React from "react";
import { Rocket, Sparkle, Sun, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex justify-center">
          <div className="inline-flex items-center mt-12 bg-white border border-black hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium mb-6 sm:mb-12 shadow-sm">
            <Sun className="mr-2" />
            Project Showcase
            <Sparkle className="ml-2" />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl pb-4 transition-transform transform hover:scale-105  bg-white border-t border-gray-50"
            >

              <Link href={`/projects/${project.id}`}>
                <div className="rounded-xl p-3 mb-6 w-full h-52 bg-green-50 border border-green-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt || "Project image"}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    priority={project.priority || false}
                  />
                </div>


                <h3 className="text-lg md:text-xl px-3 font-medium mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 px-2 text-sm md:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>
              </Link>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap justify-center px-3 gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-xs border border-green-100 rounded-lg bg-green-50 text-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              )}


              <div className="flex justify-center gap-6 mt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 text-sm border border-black rounded-full hover:bg-black hover:text-white transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14 text-center">
          <a
            href="projects"
            className="inline-flex items-center bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition"

          >
            Explore all Projects
            <Rocket className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
