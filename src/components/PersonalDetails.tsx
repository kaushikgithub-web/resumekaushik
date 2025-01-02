import React from 'react';
import { Calendar, Flag, Home, Phone } from 'lucide-react';

export default function PersonalDetails() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-blue-600" />
          <span>Date of Birth: 26th May 2001</span>
        </div>
        <div className="flex items-center gap-2">
          <Flag size={18} className="text-blue-600" />
          <span>Nationality: Indian</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-blue-600" />
          <span>Languages: English , Hindi</span>
        </div>
        <div className="flex items-center gap-2">
          <Home size={18} className="text-blue-600" />
          <span>Lucknow,  UP</span>
        </div>
      </div>
    </section>
  );
}