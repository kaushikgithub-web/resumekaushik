import React from 'react';
import SkillCategory from './SkillCategory';

const technicalSkills = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "React.js", "SQL"],
  "Frameworks": ["Bootstrap", "Tailwind CSS"],
  "JavaScript Libraries": []
};

export default function TechnicalSkills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}