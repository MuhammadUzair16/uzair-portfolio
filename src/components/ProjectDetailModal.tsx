import React from 'react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    shortDescription: string;
    shortBullets: string[];
    image: string;
    longDescription: string;
    longBullets: string[];
    image2: string;
  } | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
      style={{ cursor: 'pointer' }}
    >
      <div
        className="bg-[#18182F] rounded-2xl shadow-lg w-full max-w-3xl mx-2 sm:mx-4 md:mx-8 p-2 sm:p-6 md:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ cursor: 'auto' }}
      >
        {/* Sticky Close Button for Mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white text-2xl font-bold focus:outline-none rounded-full bg-slate-800/70 hover:bg-slate-700/80 p-2 shadow transition-all duration-200 z-20 border border-slate-700/40"
          aria-label="Close"
          style={{ minWidth: 36, minHeight: 36, lineHeight: 1 }}
        >
          &times;
        </button>
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center mt-12 md:mt-0">{project.title}</h2>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center mb-6 sm:mb-8 gap-4 sm:gap-8">
          {/* Left: Short Description + Bullets */}
          <div className="flex-1 text-left">
            <p className="text-base sm:text-lg text-slate-200 mb-2 sm:mb-3">{project.shortDescription}</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-4">
              {project.shortBullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={project.image}
              alt={project.title + ' preview'}
              className="rounded-xl shadow-md max-h-40 sm:max-h-56 object-contain"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
          {/* Left: Image2 */}
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <img
              src={project.image2}
              alt={project.title + ' detail'}
              className="rounded-xl shadow-md max-h-40 sm:max-h-56 object-contain"
              style={{ maxWidth: '100%' }}
            />
          </div>
          {/* Right: Long Description + Bullets */}
          <div className="flex-1 text-left order-1 md:order-2">
            <p className="text-base sm:text-lg text-slate-200 mb-2 sm:mb-3">{project.longDescription}</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-4">
              {project.longBullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal; 