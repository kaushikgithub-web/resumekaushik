import React from 'react';

const skills = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "React.js", "SQL"],
  "Frameworks": ["Bootstrap", "Tailwind CSS"],
  "JavaScript Libraries": []
}

export default function SkillsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4"> Technical Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}