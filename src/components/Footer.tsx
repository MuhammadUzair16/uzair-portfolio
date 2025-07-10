import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0F] border-t border-slate-700/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
              Muhammad<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Uzair</span>
            </h3>
            <p className="text-slate-300 mb-4" style={{ fontFamily: '"Inter", "DM Sans", sans-serif' }}>
             Passionate Python Backend Developer experienced in Django, REST frameworks, and database-driven web systems
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/muhammaduzair16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-uzair-07920a294"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:uk200114@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}>
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-slate-300">
                <a href="mailto:alex@example.com" className="hover:text-blue-400 transition-colors">
                  uk200114@gmail.com
                </a>
              </p>
              <p className="text-slate-300">
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +92 (314) 9477077
                </a>
              </p>
              <p className="text-slate-300">Islamabad, PK</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {currentYear} Muhammad Uzair
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;