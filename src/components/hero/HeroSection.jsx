import React from "react";
import { profileSection } from "./HeroContent";
import { motion } from "framer-motion";
import {Typewriter} from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    // <div>
    //         <section className="min-h-screen  text-white flex flex-col items-center justify-center gap-10 !px-4 sm:flex-row ">
    //   <div className="h-[220px] w-[220px] max-h-[300px] max-w-[310px] sm:h-[300px] sm:min-w-[300px] bg-white">
    //     <img src=" " alt="imagePending" />
    //   </div>
    //   <div className=" h-full md:h-[400px]">
    //   <h1 className="text-2xl font-bold !mb-4 text-left text-center sm:text-2xl md:text-6xl sm:tracking-tighter ">
    //    {profileSection.heading}
    //   </h1>
    //   <p className="text-lg text-left text-gray-300 text-center md:text-2xl">
    //     {profileSection.description}
    //   </p>
    //   </div>
    // </section>bg-[#0f172a]

    // </div>

    <div className="min-h-screen  text-white flex items-center justify-center !px-4 !py-10]">
      <section className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-10">
        {/* Animated Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] bg-white rounded-full overflow-hidden shadow-lg"
        >
          <img
            src={profileSection.photo}
            alt="Developer"
            className="object-cover h-full w-full"
          />
         </motion.div>

        
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col sm:text-left items-center text-center border-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl border-2 font-bold leading-tight !mb-6">
            {profileSection.heading}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl  leading-relaxed max-w-2xl sm:text-left border-2">
            {profileSection.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="!mt-8 w-1/2 !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            {profileSection.buttonText}
          </motion.button>
        </motion.div>   */}
        <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left"
>
  {/* <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight !mb-6">
    {profileSection.heading}
  </h1> */}

  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight !mb-6">Hi, I am {''}    <Typewriter
                words={['Parth', 'a Full-Stack Developer', 'a React Enthusiast']}
                loop={0} // set to `Infinity` for endless loop
                cursor
                cursorStyle="<"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                cursorColor="red"
                cursorBlinking
                className='text-3xl sm:text-5xl md:text-6xl font-bold leading-tight !mb-6 '
                
              /></h1>

            

  <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
    {profileSection.description}
  </p>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className=" cursor-pointer !mt-8 w-1/2 !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
  >
    {profileSection.buttonText}
  </motion.button>
</motion.div>

      </section>
    </div>
  );
};

export default HeroSection;
