import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    title: "Junior Python Developer",
    company: "TechieSolutions",
    location: "USA (Remote)",
    period: "Dec 2024 – Present",
    description: null,
    achievements: [
      "Designed, developed, and maintained robust backend systems using Django and Django REST Framework to support scalable web applications.",
      "Implemented real-time features using WebSockets for live updates.",
      "Built RESTful APIs for seamless integration with front-end applications and third-party services",
      "Integrated third-party APIs (payment gateways, email services) and cloud storage solutions."
    ],
    technologies: []
  },
  {
    title: "Django Developer (Internship)",
    company: "Devsinc Intern Connect",
    location: "Islamabad",
    period: "October 2024 – Nov 2024",
    description: null,
    achievements: [
      "Django Fundamentals and Frontend Skills Development",
      "Master Django basics, including setup, models, views, templates, and REST framework",
      "Learn advanced frontend integrations using JavaScript, AJAX, and responsive design techniques.",
      "Implement user authentication and authorization systems.",
      "Develop CRUD functionalities for blog post management, including draft/publish states, image uploads, and categorization.",
      "Consistently use Git for version control and collaborative development.",
      "Share progress, handle pull requests, and manage repositories effectively.",
      "Develop features like commenting, liking, and rating blog posts with interactive frontends",
      "Implement relational models to manage complex data relationships efficiently."
    ],
    technologies: []
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0F0F1A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
            Professional Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
            My journey through various roles and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 to-purple-600/50 hidden md:block" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-[#0F0F1A] shadow-[0_0_20px_rgba(99,102,241,0.5)] hidden md:block" />
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <p className="text-blue-400 font-semibold mb-2" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-slate-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-slate-300 mb-4 leading-relaxed" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
                      {exp.description}
                    </p>
                  )}
                  <div className="mb-4">
                    <h4 className="flex items-center gap-2 text-white font-semibold mb-3" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
                      <Award className="w-4 h-4 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-300 flex items-start gap-2" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;