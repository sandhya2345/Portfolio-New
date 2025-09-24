"use client";
import React from "react";
import { ChevronDown, Earth, MoveUpRight, Rocket, Sparkle, Sun } from "lucide-react";
import { projects } from "@/lib/data/projects";

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-center">
          <div className="inline-flex items-center mt-18 bg-white border border-black  hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium mb-6 sm:mb-8 shadow-sm">
              <Sun className="mr-2" />
            Project Showcase
            <Sparkle className="ml-2" />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-3 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="rounded-xl mb-6 w-full h-52 object-cover"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
            </div>
          ))}
        </div>


        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full bg-white border border-black font-medium hover:bg-black hover:text-white transition flex items-center justify-center mx-auto">
            Explore all Projects
            <Rocket className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
