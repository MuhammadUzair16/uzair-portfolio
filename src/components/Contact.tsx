import React, { useState } from "react";
// ...other imports
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
    <section id="contact" className="py-20 bg-[#0A0A0F] min-h-screen flex items-center relative overflow-hidden">
      {/* Full-section Gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-transparent pointer-events-none z-0" />
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[70vh] min-h-[500px] relative z-10">
        {/* Left Side: Enhanced Get in Touch */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 py-8">
          {/* Heading with glow */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-center md:text-left text-glow" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
            Get in Touch
          </h2>
          {/* Contact Info Group */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3 text-slate-200 text-base sm:text-lg">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-blue-400">Location:</span>
              <span>Islamabad, PK</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-base sm:text-lg">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-blue-400">Phone:</span>
              <a href="tel:+923149477077" className="hover:text-blue-400 transition-colors">+92 (314) 9477077</a>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-base sm:text-lg">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-blue-400">Email:</span>
              <a href="mailto:uk200114@gmail.com" className="hover:text-blue-400 transition-colors">uk200114@gmail.com</a>
            </div>
          </div>
          {/* Social Links Group */}
          <div className="flex gap-5 mb-8">
            <a
              href="https://github.com/muhammaduzair16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-white hover:bg-blue-600/30 transition-colors shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-uzair-07920a294"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-white hover:bg-blue-600/30 transition-colors shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:uk200114@gmail.com"
              className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-white hover:bg-blue-600/30 transition-colors shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="/uzairresume.pdf"
              download
              className="p-3 bg-slate-800/60 rounded-full text-slate-400 hover:text-white hover:bg-blue-600/30 transition-colors shadow-lg"
              aria-label="Download Resume"
            >
              <Download className="w-6 h-6" />
            </a>
          </div>
          {/* Download Resume Button */}
          <a
            href="/uzairresume.pdf"
            download
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all text-center text-lg tracking-wide"
          >
            Download Resume
          </a>
        </div>
        {/* Right Side: Contact Form in Card */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full mt-8 md:mt-0 px-4 sm:px-0">
          <div className="w-full max-w-md sm:max-w-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-4 sm:p-8 relative">
            <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              Contact Form
            </h3>
            {showPopup && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-20 text-center text-base font-semibold animate-fade-in">
                Thank you for contacting us! We'll get back to you as soon as possible.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div>
                <label htmlFor="name" className="block text-slate-200 font-semibold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-200 font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-200 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
