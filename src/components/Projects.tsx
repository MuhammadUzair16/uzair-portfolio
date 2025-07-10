import React, { useState } from 'react';
import { ExternalLink, Github, ShoppingCart , Store , School, Handshake} from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

interface DetailedProject {
  title: string;
  shortDescription: string;
  shortBullets: string[];
  image: string;
  longDescription: string;
  longBullets: string[];
  image2: string;
}

const detailedProjects: DetailedProject[] = [
  {
    title: "BidBazaar (E-Commerce Platform)",
    shortDescription: "A modern auction platform for seamless bidding.",
    shortBullets: [
      "Real-time bidding system",
      "AI-driven participation",
      "Rewarding system for users"
    ],
    image: "/bidbazaarcoin.PNG",
    longDescription: "BidBazaar offers a secure, dynamic, and engaging auction experience with advanced features.",
    longBullets: [
      "Secure payment integration",
      "Dynamic progress tracking",
      "Responsive design for all devices"
    ],
    image2: "/bidbazaarauction.PNG",
  },
  {
    title: "FrutoNest",
    shortDescription: "A marketplace for fresh, organic produce.",
    shortBullets: [
      "Connects consumers and providers",
      "User-friendly interface",
      "Wide variety of products"
    ],
    image: "/frutonest.PNG",
    longDescription: "FrutoNest bridges the gap between consumers and organic produce providers.",
    longBullets: [
      "Secure transactions",
      "Interactive product discovery",
      "Visually appealing design"
    ],
    image2: "/frutonest.PNG",
  },
  {
    title: "Kinder Bloom",
    shortDescription: "An educational platform for young learners.",
    shortBullets: [
      "Fosters creativity and curiosity",
      "Safe and inclusive environment",
      "Supports academic and social growth"
    ],
    image: "/Kinderbloom.PNG",
    longDescription: "Kinder Bloom nurtures a lifelong love for learning among children.",
    longBullets: [
      "Stimulating activities",
      "Emotional and social development",
      "Innovative learning tools"
    ],
    image2: "/Kinderbloom.PNG",
  },
  {
    title: "Insaniyat for Gaza (Humanitarian Donation Platform)",
    shortDescription: "A platform to support Palestinian causes.",
    shortBullets: [
      "Real-time campaigns",
      "Volunteer systems",
      "Boycott Hub"
    ],
    image: "/Gaza.PNG",
    longDescription: "Empowering users to support humanitarian causes with secure and dynamic features.",
    longBullets: [
      "Secure fundraising",
      "Dynamic progress tracking",
      "Responsive and impactful design"
    ],
    image2: "/Gaza.PNG",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: "BidBazaar (E-Commerce Platform)",
      description: "BidBazaar is an innovative online auction platform that incorporates advanced features to enhance the user experience and ensure seamless bidding processes. The project was developed with a focus on integrating dynamic bidding mechanisms, AI-driven participation, and a rewarding system to incentivize user engagement.",
      image: "/Bidbazaar pic.PNG",
      tech: ["Python", "Django", "MySQL", "Stripe"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/MuhammadUzair16/Bidbazaar",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "FrutoNest",
      description: "Frutonest is a web-based platform designed to seamlessly bridge the gap between consumers and fresh, organic produce providers. The platform aims to create a marketplace where users can discover, purchase, and explore various fresh and natural products in a user-friendly, interactive, and visually appealing manner",
      image: "/frutonest.PNG",
      tech: ["Python", "Django", "MySQL", "Stripe"],
      liveUrl: "https://example-tasks.com",
      githubUrl: "https://github.com/MuhammadUzair16/FrutoNest",
      icon: <Store  className="w-6 h-6" />
    },
    {
      title: "Kinder Bloom",
      description: "Kinder Bloom is a nurturing and innovative educational platform designed to foster creativity, curiosity, and a lifelong love for learning among children. It is a safe, inclusive, and stimulating environment where young minds can thrive academically, socially, and emotionally.",
      image: "/Kinderbloom.PNG",
      tech: ["Python", "Django", "MySQL", "PyCharm"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/MuhammadUzair16/KinderBloom",
      icon: <School className="w-6 h-6" />
    },
    {
      title: "Insaniyat for Gaza (Humanitarian Donation Platform)",
      description: "Insaniyat for Gaza is a humanitarian donation platform built with Django, empowering users to support Palestinian causes through real-time campaigns, volunteer systems, and a Boycott Hub. It features secure fundraising, dynamic progress tracking, and responsive design for impactful engagement.",
      image: "/Gaza.PNG",
      tech: ["Python", "Django", "PostgreSQL", "PyCharm"],
      liveUrl: "https://example-banking.com",
      githubUrl: "https://github.com/MuhammadUzair16/insaniyat-for-gaza",
      icon: <Handshake className="w-6 h-6" />
    },

  ];

  const handleProjectClick = (index: number) => {
    setSelectedProject(detailedProjects[index]);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-[#0F0F1A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.2)] group"
              onClick={() => handleProjectClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;