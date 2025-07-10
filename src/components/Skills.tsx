import React from 'react';
import {Database, Server, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Python", "Django", "GraphQL", "REST APIs", "Django Restframework", "FastAPI", "Flask", "Stripe API"]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "Django ORM", "Redis", "MySQL", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker","CI/CD", "Nginx", "GitHub Actions"]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git","Postman", "PyCharm", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0A0A0F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-3 text-center text-slate-200 text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Problem Solving", "Team Leadership", "Agile Development", "Code Review", "Mentoring", "Technical Writing"].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-blue-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;