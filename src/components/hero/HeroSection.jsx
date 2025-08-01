import React from "react";
import { profileSection } from "./HeroContent";
import { motion } from "framer-motion";
import {Typewriter} from 'react-simple-typewriter'
import Image  from '../../assets/IMG_1065.jpg'
const HeroSection = () => {
  return (
   

    <div className="min-h-screen  text-white flex items-center justify-center !px-4 !py-10]">
      <section className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-10">
        {/* Animated Image Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[220px] w-[220px] sm:h-[300px] sm:w-[300px]  rounded-full overflow-hidden shadow-lg"
        >
          <img
            src={Image}
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

{/* <a href="#projects" className=" cursor-pointer !mt-8 w-1/2 !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"> */}
<div className="flex gap-2 sm:flex-row flex-col">
<motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className=" cursor-pointer !mt-8 w-[300px] !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
    href="#projects"
  >
     <h2 className="text-center">{profileSection.buttonText}</h2>
  </motion.a>
{/* </a> */}
<motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className=" cursor-pointer !mt-8 w-[300px] !px-6 !py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
    href="https://docs.google.com/document/d/13b8Bs4RGjs1HP-tIay2kjyfiJHF37U53DOuj-_nackk/edit?usp=drive_link"
  >
     <h2 className="text-center">View Resume</h2>
  </motion.a>

</div>
</motion.div>

      </section>
    </div>
  );
};

export default HeroSection;
