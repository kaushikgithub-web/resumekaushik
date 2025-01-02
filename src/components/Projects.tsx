import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: "PORTFOLIO",
    description: "Making a Self Portfolio",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "TIK TAK TOE , Simen- Game , Wheather Update",
    description: "Game Development, Interactive UI Design, API Integration",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  }
];

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name} className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <div className="flex gap-4">
              </div>
            </div>
            <p className="text-gray-700 my-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}