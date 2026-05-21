import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "work", "education"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#020c1b]/80 backdrop-blur-md shadow-[0_1px_0_rgba(100,255,218,0.08)]" : "bg-transparent"
    }`}>
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold cursor-pointer font-mono tracking-tight">
          <span className="text-[#64ffda]">&lt;</span>
          <span className="text-white">Kalash</span>
          <span className="text-[#64ffda]">/</span>
          <span className="text-white">Kashyap</span>
          <span className="text-[#64ffda]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-slate-400 text-sm">
          {menuItems.map((item) => (
            <li key={item.id} className="relative cursor-pointer group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-200 hover:text-[#64ffda] ${
                  activeSection === item.id ? "text-[#64ffda]" : ""
                }`}
              >
                {item.label}
              </button>
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#64ffda] transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://github.com/KalashKashyapp" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#64ffda] transition-colors duration-200">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/kalash-kashyap-673707292/" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#64ffda] transition-colors duration-200">
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen
            ? <FiX className="text-2xl text-[#64ffda] cursor-pointer" onClick={() => setIsOpen(false)} />
            : <FiMenu className="text-2xl text-[#64ffda] cursor-pointer" onClick={() => setIsOpen(true)} />
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#0a1f2e]/90 backdrop-blur-lg z-50 rounded-xl shadow-lg border border-[#64ffda]/10 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-slate-400">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#64ffda] transition-colors ${activeSection === item.id ? "text-[#64ffda]" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/KalashKashyapp" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#64ffda]"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/kalash-kashyap-673707292/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#64ffda]"><FaLinkedin size={22} /></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;