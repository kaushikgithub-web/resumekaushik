import React from 'react';
import ResumeHeader from './components/ResumeHeader';
import PersonalDetails from './components/PersonalDetails';
import ProfileSummary from './components/ProfileSummary';
import CoreCompetencies from './components/CoreCompetencies';
import TechnicalSkills from './components/skills/TechnicalSkills';
import SoftSkills from './components/skills/SoftSkills';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import EducationSection from './components/EducationSection';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <ResumeHeader />
          <ProfileSummary />
          <PersonalDetails />
          <CoreCompetencies />
          <div className="grid grid-cols-1 gap-8">
            <TechnicalSkills />
            <SoftSkills />
          </div>
          <ExperienceSection />
          <Projects />
          <EducationSection />
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App;