import { projects } from "@/lib/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, ExternalLink, GalleryHorizontal, Video, ArrowBigLeft } from "lucide-react";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      <div className="flex justify-center">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
          <span><Video /></span> Project Gallery
        </div>
      </div>

      <h1 className="text-4xl md:text-4xl font-semibold text-center mt-6 mb-4">
        {project.title}
      </h1>


      <p className="text-gray-600 text-lg md:text-xl text-center max-w-4xl mx-auto">
        {project.description}
      </p>


      {project.technologies && (
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm rounded-full border border-gray-300 bg-green-50 shadow-sm hover:bg-gray-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      )}




      {project.videoUrl && (
        <div className="mt-14 bg-green-50 p-12 rounded-3xl shadow-inner">
          <div className="rounded-2xl overflow-hidden shadow-xl">

            <video
              controls
              className="w-full translate-y-[-50px]"
              >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      )}

      {/* <div className="flex justify-center gap-4 mt-10">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 border bg-gray-950 text-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <Github size={18} /> GitHub
          </Link>
        )}
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 border bg-gray-950 text-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            <ExternalLink size={18} /> Live Demo
          </Link>
        )}
      </div> */}



      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full bg-green-100 text-green-700 hover:bg-green-200 font-medium shadow-sm transition flex items-center gap-2"
        >
          <span><ArrowBigLeft/></span>Back to Projects
        </Link>
      </div>

    </section>
  );
}
