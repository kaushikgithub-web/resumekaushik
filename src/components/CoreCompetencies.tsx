import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const competencies = [
  "React",
  "JavaScript",
  "HTML & CSS",
  "Team Leadership & Management",
  "SQL",
  "FRAMEWORKS",
  "Security Best Practices",
  "Database Design"
];

export default function CoreCompetencies() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Competencies</h2>
      <div className="grid grid-cols-2 gap-4">
        {competencies.map((competency) => (
          <div key={competency} className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-blue-600" />
            <span className="text-gray-700">{competency}</span>
          </div>
        ))}
      </div>
    </section>
  );
}