// import React from "react";
// import { experiences } from "../../constants";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[7vw] lg:px-[20vw] font-sans"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <p className="text-[#64ffda] font-mono text-sm tracking-widest uppercase mb-2">Where I've worked</p>
//         <h2 className="text-4xl font-bold text-white">Experience</h2>
//         <div className="w-16 h-px bg-[#64ffda] mx-auto mt-4" />
//         <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
//           A collection of my work experience and the roles I have taken in various organizations
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#64ffda]/60 via-[#64ffda]/20 to-transparent -translate-x-1/2" />

//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${
//               index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
//             }`}
//           >
//             {/* Timeline dot */}
//             <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#64ffda] z-10
//               shadow-[0_0_12px_rgba(100,255,218,0.6)] ring-4 ring-[#020c1b]" />

//             {/* Card */}
//             <div className={`ml-12 sm:ml-0 w-full sm:w-[45%] ${
//               index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"
//             }`}>
//               <div className="bg-[#0a1f2e]/70 border border-[#64ffda]/15 rounded-2xl p-5
//                 hover:border-[#64ffda]/40 hover:shadow-[0_0_30px_rgba(100,255,218,0.07)]
//                 hover:-translate-y-1 transition-all duration-300">

//                 {/* Company info */}
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#64ffda]/20 flex-shrink-0 bg-white">
//                     <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-semibold text-white">{experience.role}</h3>
//                     <p className="text-xs text-slate-400">{experience.company}</p>
//                   </div>
//                 </div>

//                 {/* Date badge */}
//                 <div className="mb-3">
//                   <span className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-1 rounded">
//                     {experience.date}
//                   </span>
//                 </div>

//                 <p className="text-slate-400 text-xs leading-relaxed mb-4">{experience.desc}</p>

//                 {/* Skills */}
//                 <div className="flex flex-wrap gap-2">
//                   {experience.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-1 rounded"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;