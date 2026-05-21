// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/Profile-1.png';

// const About = () => {
//     return (
//         <section
//             id="about"
//             className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//         >
//             <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//                 {/* Left Side */}
//                 <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//                     {/* Greeting */}
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//                         Hi, I am
//                     </h1>
//                     {/* Name */}
//                     <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//                         Kalash Kashyap
//                     </h2>
//                     {/* Skills Heading with Typing Effect */}
//                     <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//                         <span className="text-white">I am a </span>
//                         <TypeAnimation
//                             sequence={[
//                                 'Aspiring Software Engineer',
//                                 2000,
//                                 'Full Stack Developer',
//                                 2000,
//                                 'React Developer',
//                                 2000,
//                                 'DSA Enthusiast',
//                                 2000,
//                             ]}
//                             wrapper="span"
//                             speed={50}
//                             repeat={Infinity}
//                             className="text-[#8245ec]"
//                         />
//                     </h3>
//                     {/* About Me Paragraph */}
//                     <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//                         I am an aspiring software engineer passionate about full-stack web
//                         development and problem-solving With hands-on experience in React,
//                         Node.js, Express.js, and MongoDB, I enjoy building responsive web
//                         applications and continuously improving my DSA and software development
//                         skills.
//                     </p>
//                     {/* Resume Button */}
//                     <a
//                         href="https://drive.google.com/file/d/1oISh8epdMX0CfnKz91V5plafOR3GkdJc/view?usp=drivesdk"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//                         style={{
//                             background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//                             boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//                         }}
//                     >
//                         DOWNLOAD CV
//                     </a>

//                 </div>
//                 {/* Right Side */}
//                 <div className="md:w-1/2 flex justify-center md:justify-end">
//                     <Tilt
//                         className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//                         tiltMaxAngleX={20}
//                         tiltMaxAngleY={20}
//                         perspective={1000}
//                         scale={1.05}
//                         transitionSpeed={1000}
//                         gyroscope={true}
//                     >
//                         <img
//                             src={profileImage}
//                             alt="kalash kashyap"
//                             className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//                         />
//                     </Tilt>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import { HiDownload } from 'react-icons/hi';
import profileImage from '../../assets/Profile-1.png';

const About = () => {
  return (
    <section id="about" className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-10">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#64ffda] font-mono text-base mb-3 tracking-widest uppercase">
            Hi, I am
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Kalash<br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #64ffda, #0ea5e9)'
            }}>Kashyap</span>
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 leading-tight">
            <span className="text-slate-400">I am a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'React Developer', 2000,
                'DSA Enthusiast', 2000,
                'Aspiring Software Engineer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#64ffda] font-semibold"
            />
          </h3>
          <div className="w-16 h-px bg-[#64ffda] mb-6 mx-auto md:mx-0" />
          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            I am an aspiring software engineer passionate about full-stack web
            development and problem-solving with hands-on experience in React,
            Node.js, Express.js, and MongoDB. I enjoy building responsive web
            applications and continuously improving my DSA and software development skills.
          </p>
          
          <a href="https://drive.google.com/file/d/1oISh8epdMX0CfnKz91V5plafOR3GkdJc/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#64ffda] text-[#64ffda] font-mono text-sm px-8 py-3 rounded hover:bg-[#64ffda]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:scale-105"
          >
            Download CV
            <HiDownload size={18} />
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.04} transitionSpeed={1000} gyroscope={true}>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem]">
              <div className="absolute inset-0 rounded-full"
                style={{ boxShadow: '0 0 0 2px #64ffda, 0 0 40px rgba(100,255,218,0.15)' }} />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#64ffda] rounded-tl-md" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#64ffda] rounded-tr-md" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#64ffda] rounded-bl-md" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#64ffda] rounded-br-md" />
              <img
                src={profileImage}
                alt="Kalash Kashyap"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;