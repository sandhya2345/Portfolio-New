"use client";
import { AArrowDown, Flower, Gem, Globe, Hamburger } from "lucide-react";
import React, { useState } from "react";
import { projects } from "@/lib/data/projects";

const Projects = () => {
  const [active, setActive] = useState("all"); 

  const buttonClasses = (category) =>
    `flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
      active === category
        ? "bg-gray-900 text-white shadow-md hover:shadow-lg"
        : "border border-gray-900 bg-white text-gray-700 hover:shadow-md"
    }`;


  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section className="text-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="flex flex-wrap items-center justify-center text-3xl sm:text-4xl  mb-8">
          Showcasing the projects
          <Gem className="ml-2 h-8 w-8" />
        </h2>

      
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setActive("all")} className={buttonClasses("all")}>
            <Hamburger /> All Projects
          </button>
          <button onClick={() => setActive("websites")} className={buttonClasses("websites")}>
            <Globe /> Websites
          </button>
          <button onClick={() => setActive("applications")} className={buttonClasses("applications")}>
            <AArrowDown /> Applications
          </button>
          <button onClick={() => setActive("dashboards")} className={buttonClasses("dashboards")}>
            <Flower /> Dashboards
          </button>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-3 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="rounded-xl mb-6 w-full h-52 object-cover"
              />
              <h3 className="text-lg md:text-xl font-medium mb-3">{project.title}</h3>
              <p className="text-gray-800 text-sm md:text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
