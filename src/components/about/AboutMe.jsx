// import React from "react";
// import { aboutMe } from "./AboutMeData";
// import { motion, useScroll } from "framer-motion";

// const AboutMe = () => {
//     const { scrollYProgress } = useScroll()
//   return (
//     <div className="min-h-[200vh]"> 
//        <motion.div
//                 id="scroll-indicator"
//                 style={{
//                     scaleX: scrollYProgress,
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: 10,
//                     originX: 0,
//                     backgroundColor: "#ff0088",
//                 }}
//             />
//             <p>
//                helloooooo
//             </p>
            
//     </div>
//   );
// };

// export default AboutMe;


import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { aboutMe } from "./AboutMeData";

const AboutMe = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  return (
  <div className="h-screen flex ">

<div className="h-[400px] w-[300px] !m-auto sm:w-[600px] bg-gray-900 text-white" id="about">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="relative h-full overflow-y-auto border border-gray-700 rounded-lg"
      >
        {/* Progress bar */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            originX: 0,
            backgroundColor: "#ff0088",
            zIndex: 10,
          }}
        />

        {/* Content */}
        <div className="!p-8 min-h-[300px] text-center">
          <h2 className="text-3xl  font-bold !mb-6">{aboutMe[0].title}</h2>
          <p className="text-left text-lg leading-8 text-gray-300 whitespace-pre-line">
            {aboutMe[0].content}
          </p>
        </div>
      </div>
    </div>

  </div>
  );
};

export default AboutMe;
