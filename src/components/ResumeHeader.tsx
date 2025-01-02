import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ResumeHeader() {
  return (
    <header className="text-center mb-6">
      {/* Name and Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-1">Kaushik Mishra</h1>
      <h2 className="text-lg font-medium text-blue-600 mb-4">Front-End Developer</h2>

      {/* Contact Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
        {/* Email */}
        <a
          href="mailto:kaushikmish77@gmail.com"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <Mail size={18} />
          <span>kaushikmish77@gmail.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kaushikgithub-web"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <Github size={18} />
          <span>github.com/kaushikgithub-web</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kaushik-mishra-/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <Linkedin size={18} />
          <span>linkedin.com/in/Kaushik</span>
        </a>
      </div>
    </header>
  );
}
