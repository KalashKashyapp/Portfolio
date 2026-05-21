// import React, { useState } from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section
//       id="work"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Container */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
//           <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="text-white text-3xl font-bold hover:text-purple-500"
//               >
//                 &times;
//               </button>
//             </div>

//             <div className="flex flex-col">
//               <div className="w-full flex justify-center bg-gray-900 px-4">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
//                 />
//               </div>
//               <div className="lg:p-8 p-6">
//                 <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
//                   {selectedProject.title}
//                 </h3>
//                 <p className="text-gray-400 mb-6 lg:text-base text-xs">
//                   {selectedProject.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {selectedProject.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                   >
//                     View Code
//                   </a>
//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                   >
//                     View Live
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;

import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-[7vw] lg:px-[20vw] font-sans">
      {/* Section Title */}
      <div className="text-center mb-14">
        <p className="text-[#64ffda] font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-16 h-px bg-[#64ffda] mx-auto mt-4" />
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group rounded-2xl border border-[#64ffda]/15 bg-[#0a1f2e]/60 backdrop-blur-sm overflow-hidden cursor-pointer
              hover:border-[#64ffda]/40 hover:shadow-[0_0_40px_rgba(100,255,218,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="hover:text-[#64ffda] transition-colors"><FaGithub size={18} /></a>
                  <a href={project.webapp} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="hover:text-[#64ffda] transition-colors"><FaExternalLinkAlt size={16} /></a>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag, i) => (
                  <span key={i}
                    className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}>
          <div className="bg-[#0a1f2e] border border-[#64ffda]/20 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title}
                className="w-full h-56 object-cover" />
              <button onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-[#64ffda]/20 hover:text-[#64ffda] w-8 h-8 rounded-full flex items-center justify-center transition-colors text-lg">
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i}
                    className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#64ffda]/30 text-slate-300 hover:text-[#64ffda] hover:border-[#64ffda] py-2.5 rounded-xl text-sm font-mono transition-all">
                  <FaGithub size={16} /> View Code
                </a>
                <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#64ffda]/10 border border-[#64ffda]/40 text-[#64ffda] hover:bg-[#64ffda]/20 py-2.5 rounded-xl text-sm font-mono transition-all">
                  <FaExternalLinkAlt size={14} /> View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;