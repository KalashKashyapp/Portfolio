import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h09wndt",
        "template_drfcg31",
        form.current,
        "gi_AgscL5e62bfcHw"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[7vw] lg:px-[20vw] font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-14">
        <p className="text-[#64ffda] font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-16 h-px bg-[#64ffda] mx-auto mt-4" />
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">

        {/* Left — Info */}
        <div className="md:w-2/5 space-y-6">
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Let's talk 👋</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open!
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:contact.kalashkashyap@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-[#64ffda] transition-colors group">
              <div className="w-10 h-10 rounded-xl border border-[#64ffda]/20 flex items-center justify-center group-hover:border-[#64ffda]/60 transition-colors">
                <HiMail size={18} className="text-[#64ffda]" />
              </div>
              <span className="text-sm font-mono">contact.kalashkashyap@gmail.com</span>
            </a>

            <a href="https://github.com/KalashKashyapp" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-[#64ffda] transition-colors group">
              <div className="w-10 h-10 rounded-xl border border-[#64ffda]/20 flex items-center justify-center group-hover:border-[#64ffda]/60 transition-colors">
                <FaGithub size={18} className="text-[#64ffda]" />
              </div>
              <span className="text-sm font-mono">github.com/KalashKashyapp</span>
            </a>

            <a href="https://www.linkedin.com/in/kalash-kashyap-673707292/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-[#64ffda] transition-colors group">
              <div className="w-10 h-10 rounded-xl border border-[#64ffda]/20 flex items-center justify-center group-hover:border-[#64ffda]/60 transition-colors">
                <FaLinkedin size={18} className="text-[#64ffda]" />
              </div>
              <span className="text-sm font-mono">linkedin.com/in/kalash-kashyap</span>
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="md:w-3/5 w-full bg-[#0a1f2e]/60 border border-[#64ffda]/15 rounded-2xl p-8
          hover:border-[#64ffda]/30 transition-all duration-300">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl bg-[#020c1b] text-white text-sm border border-[#1e3a4a]
                  focus:outline-none focus:border-[#64ffda]/60 placeholder-slate-600 transition-colors"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-xl bg-[#020c1b] text-white text-sm border border-[#1e3a4a]
                  focus:outline-none focus:border-[#64ffda]/60 placeholder-slate-600 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-xl bg-[#020c1b] text-white text-sm border border-[#1e3a4a]
                focus:outline-none focus:border-[#64ffda]/60 placeholder-slate-600 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-xl bg-[#020c1b] text-white text-sm border border-[#1e3a4a]
                focus:outline-none focus:border-[#64ffda]/60 placeholder-slate-600 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full border border-[#64ffda] text-[#64ffda] font-mono text-sm py-3 rounded-xl
                hover:bg-[#64ffda]/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)]
                transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;