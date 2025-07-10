import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Eye, Code, Database, Smartphone, Globe } from 'lucide-react';
import { SiPython, SiDjango, SiMysql } from 'react-icons/si';
import uzairpicture from '../assets/face-swap.png';

const HERO_NAME = 'Muhammad Uzair';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut" as const
    }
  }
};

const skills = [
  { name: 'Python', icon: <SiPython className="w-4 h-4 text-yellow-500" /> },
  { name: 'Django', icon: <SiDjango className="w-4 h-4 text-green-700" /> },
  { name: 'MySQL', icon: <SiMysql className="w-4 h-4 text-blue-600" /> },
  { name: 'REST APIs', icon: <Smartphone className="w-4 h-4 text-indigo-500" /> }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/muhammaduzair16', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/uzairdev', label: 'LinkedIn' },
  { icon: Download, href: '/uzairresume.pdf', label: 'Download CV', download: true }
];

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 6
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut" as const
          }}
        />
      ))}

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Desktop Layout (>1024px) */}
      <div className="hidden lg:flex min-h-screen items-center relative z-10">
        <div className="container mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side - Portrait Photo */}
            <motion.div 
              className="relative flex justify-center"
              initial="hidden"
              animate="visible"
              variants={photoVariants}
            >
              <div className="relative">
                <div className="absolute -inset-12 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -inset-8 bg-blue-400/20 rounded-2xl blur-2xl" />
                <div className="relative w-[450px] h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-800/50 border border-slate-700/50 flex items-start">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 z-10" />
                  <img
                    src={uzairpicture}
                    alt={`${HERO_NAME} - Python-Developer`}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/50" />
                </div>
                <motion.div
                  className="absolute -right-8 top-20 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                >
                  <Code className="w-6 h-6 text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute -left-8 bottom-32 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
                >
                  <Database className="w-6 h-6 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
            {/* Right side - Content */}
            <motion.div 
              className="space-y-10"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h1 
                  className="text-7xl lg:text-8xl font-bold text-white leading-[0.9]"
                  style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                >
                  {HERO_NAME}
                </motion.h1>
                <div className="flex flex-wrap gap-3 mb-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-blue-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
                    >
                      {skill.icon}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-lg" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
                  Passionate Python Backend Developer experienced in Django, REST frameworks, and database-driven web systems
                </p>
              </motion.div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  onClick={scrollToProjects}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                >
                  <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  View Portfolio
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-slate-800/50 backdrop-blur-sm text-slate-200 px-10 py-5 rounded-2xl font-semibold shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 flex items-center justify-center gap-3"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Contact Me
                </motion.button>
              </div>
              {/* Social Links including Download CV */}
              <div className="flex gap-6">
                {socialLinks.map(({ icon: Icon, href, label, download }) => (
                  <motion.a
                    key={label}
                    href={href}
                    {...(download && { download: true })}
                    target={!download ? '_blank' : undefined}
                    rel={!download ? 'noopener noreferrer' : undefined}
                    className="p-4 bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white rounded-2xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (<1024px) */}
      <div className="lg:hidden min-h-screen flex flex-col justify-center px-6 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-sm mx-auto w-full space-y-10"
        >
          {/* Hero Image Always Visible on Mobile */}
          <div className="flex justify-center pt-4">
            <div className="relative w-60 h-64 sm:w-72 sm:h-64 overflow-hidden flex items-start">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-slate-800/50 border border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 z-10" />
                <img
                  src={uzairpicture}
                  alt={`${HERO_NAME} - Full-Stack Developer`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
            >
              {HERO_NAME}
            </motion.h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-3 py-1 text-blue-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {skill.icon}
                  <span className="text-xs font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
              Full-Stack Developer crafting innovative digital solutions with cutting-edge technologies.
            </p>
          </motion.div>
          {/* CTA Buttons - Full width, stacked */}
          <div className="flex flex-col gap-4 mb-4">
            <motion.button
              onClick={scrollToProjects}
              className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full group bg-slate-800/50 backdrop-blur-sm text-slate-200 px-8 py-4 rounded-2xl font-semibold shadow-xl border border-slate-700/50 transition-all duration-300 flex items-center justify-center gap-3 text-base sm:text-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </motion.button>
          </div>
          {/* Social Links including Download CV */}
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, download }) => (
              <motion.a
                key={label}
                href={href}
                {...(download && { download: true })}
                target={!download ? '_blank' : undefined}
                rel={!download ? 'noopener noreferrer' : undefined}
                className="p-4 bg-slate-800/50 backdrop-blur-sm text-slate-400 hover:text-white rounded-2xl shadow-xl border border-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full shadow-xl border border-slate-700/50"
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;