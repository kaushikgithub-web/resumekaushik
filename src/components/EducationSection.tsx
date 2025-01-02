import React from 'react';

const education = [
  {
    degree: "Master of Computer Applications",
    college: "Maharishi University of Information",
    period: "2022 - 2024",
    details: "Specialization in Front End Deveelopment "
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Goel Group of higher studies",
    period: "2019 - 2022",
    details: "Minor in Mathematics, Dean's List"
  }, {
    degree: "Intermediate (PCM)",
    school: "Awadh Education of academy",
    period: "2018-2019",
    details: "UP BOARD"
  }
];

export default function EducationSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Details</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <span className="text-gray-600">{edu.period}</span>
            </div>
            <p className="text-blue-600">{edu.school}</p>
            <p className="text-gray-700">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}