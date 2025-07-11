import React, { useState } from "react";
import { MapPin, Phone, Mail, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xvgrezdj", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        setShowPopup(true);
        form.reset();
        setTimeout(() => setShowPopup(false), 4000);
      }
    } catch (err) {
      // Optionally handle error
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Let's Connect
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Email</p>
                  <a href="mailto:uk200114@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    uk200114@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Phone</p>
                  <a href="tel:+923149477077" className="text-slate-300 hover:text-blue-400 transition-colors">
                    +92 (314) 9477077
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Location</p>
                  <p className="text-slate-300">Islamabad, PK</p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/muhammaduzair16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-uzair-07920a294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Resume Download */}
            <div className="pt-4">
              <a
                href="/uzairresume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-all duration-300" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              Send Message
            </h3>
            {showPopup && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-20 text-center text-base font-semibold animate-fade-in">
                Thank you for contacting us! We'll get back to you as soon as possible.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-slate-600/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-slate-600/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-slate-600/50 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:bg-slate-600/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-[0_10px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
