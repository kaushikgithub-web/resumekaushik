import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "Sahind Technology",
    position: "Front - end developer",
    period: "2024",
    achievements: [
      "Develop and maintain web applications utilizing both front-end and back-end technologies.",
      "Collaborate with team members to design and implement scalable and efficient solutions.",
      "Troubleshoot and debug issues to ensure smooth functionality and optimal performance."
    ]
  },
];

export default function ExperienceSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experinece </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
              <span className="text-gray-600">{exp.period}</span>
            </div>
            <p className="text-blue-600 mb-2">{exp.position}</p>
            <ul className="list-disc list-inside text-gray-700">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}