import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t border-[#64ffda]/10 py-10 px-[7vw] lg:px-[20vw] font-sans">
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="text-lg font-bold font-mono tracking-tight">
          <span className="text-[#64ffda]">&lt;</span>
          <span className="text-white">Kalash</span>
          <span className="text-[#64ffda]">/</span>
          <span className="text-white">Kashyap</span>
          <span className="text-[#64ffda]">&gt;</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-400 hover:text-[#64ffda] text-sm font-mono transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com/KalashKashyapp" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-[#64ffda]/20 flex items-center justify-center
              text-slate-400 hover:text-[#64ffda] hover:border-[#64ffda]/60 transition-all duration-200">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kalash-kashyap-673707292/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl border border-[#64ffda]/20 flex items-center justify-center
              text-slate-400 hover:text-[#64ffda] hover:border-[#64ffda]/60 transition-all duration-200">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:contact.kalashkashyap@gmail.com"
            className="w-9 h-9 rounded-xl border border-[#64ffda]/20 flex items-center justify-center
              text-slate-400 hover:text-[#64ffda] hover:border-[#64ffda]/60 transition-all duration-200">
            <HiMail size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#64ffda]/10" />

        {/* Copyright */}
        <p className="text-slate-600 text-xs font-mono">
          © 2026 Kalash Kashyap. Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;