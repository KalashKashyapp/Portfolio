// // src/components/Skills/Skills.jsx
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-8">
//       <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">
//       A collection of my technical skills and expertise honed through various projects and experiences
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//       {SkillsInfo.map((category) => (
//         <div
//           key={category.title}
//           className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//         >
//           <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//             {category.title}
//           </h3>

//           {/* Skill Items - 3 per row on larger screens */}
//           <Tilt
//             key={category.title}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={`${skill.name} logo`}
//                     className="w-6 h-6 sm:w-8 sm:h-8"
//                   />
//                   <span className="text-xs sm:text-sm text-gray-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </Tilt>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;

import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section id="skills" className="py-24 px-[7vw] lg:px-[20vw] font-sans">
    {/* Section Title */}
    <div className="text-center mb-14">
      <p className="text-[#64ffda] font-mono text-sm tracking-widest uppercase mb-2">What I know</p>
      <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
      <div className="w-16 h-px bg-[#64ffda] mx-auto mt-4" />
      <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
        A collection of my technical skills and expertise honed through various projects. 
        {/* and experiences */}
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          perspective={1000}
          scale={1.01}
          transitionSpeed={1000}
        >
          <div className="rounded-2xl border border-[#64ffda]/15 bg-[#0a1f2e]/60 backdrop-blur-sm p-6 h-full
            hover:border-[#64ffda]/40 hover:shadow-[0_0_30px_rgba(100,255,218,0.07)] transition-all duration-300">
            {/* Category title with accent */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-[#64ffda] rounded-full" />
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            {/* Skills grid */}
            <div className="grid grid-cols-3 gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-[#020c1b]/80 border border-[#1e3a4a] rounded-xl px-3 py-2
                    hover:border-[#64ffda]/40 hover:bg-[#0a1f2e] transition-all duration-200 group cursor-default"
                >
                  <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain flex-shrink-0" />
                  <span className="text-xs text-slate-400 group-hover:text-[#64ffda] transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;