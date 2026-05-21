// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="py-24 pb-32 px-[7vw] lg:px-[20vw] font-sans">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-[#64ffda] font-mono text-sm tracking-widest uppercase mb-2">My background</p>
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-16 h-px bg-[#64ffda] mx-auto mt-4" />
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
          My academic journey — building a strong foundation for software development
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#64ffda]/60 via-[#64ffda]/20 to-transparent -translate-x-1/2" />

        {education.map((edu, index) => (
          <div key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#64ffda] z-10
              shadow-[0_0_12px_rgba(100,255,218,0.6)] ring-4 ring-[#020c1b]" />

            {/* Card */}
            <div className={`ml-12 sm:ml-0 w-full sm:w-[45%] ${index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"
              }`}>
              <div className="bg-[#0a1f2e]/70 border border-[#64ffda]/15 rounded-2xl p-5
                hover:border-[#64ffda]/40 hover:shadow-[0_0_30px_rgba(100,255,218,0.07)]
                hover:-translate-y-1 transition-all duration-300">

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#64ffda]/20 flex-shrink-0 bg-white">
                    <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-tight">{edu.degree}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.school}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-2 py-1 rounded">
                    {edu.date}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <span className="text-xs text-slate-400">Grade</span>
                    <span className="text-xs font-semibold text-white">{edu.grade}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;