import React from 'react';
import { Book, Code, Gamepad2, Mountain } from 'lucide-react';

const hobbies = [
  { name: "Technical Writing", icon: Book },
  { name: "Open Source Contributing", icon: Code },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Hiking", icon: Mountain }
];

export default function Hobbies() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hobbies & Interests</h2>
      <div className="grid grid-cols-2 gap-4">
        {hobbies.map((hobby) => (
          <div key={hobby.name} className="flex items-center gap-3">
            <hobby.icon size={20} className="text-blue-600" />
            <span className="text-gray-700">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}