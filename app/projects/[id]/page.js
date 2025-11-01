import { projects } from "@/lib/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
    
      <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{project.description}</p>

      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs border border-gray-300 rounded-full bg-gray-50 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      
      <div className="flex gap-4 mt-6">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <Github size={18} /> GitHub
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <ExternalLink size={18} /> Live Demo
          </Link>
        )}
      </div>

     
      {project.videoUrl && (
        <div className="mt-10">
          <video controls className="w-full rounded-xl shadow-lg">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

    
      <div className="mt-10">
        <Link href="/projects" className="text-sm underline text-gray-700 hover:text-black">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
