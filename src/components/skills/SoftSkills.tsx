import React from 'react';
import SkillCategory from './SkillCategory';

const softSkills = {
  "Attributes": ["Analytical", "Collaborator", "Leader", "Adaptable"]
};

export default function SoftSkills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Soft Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(softSkills).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}