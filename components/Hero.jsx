import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative px-3 md:px-0 place-items-center m-auto text-center mt-[11rem] w-fit "
    >
      <motion.h1
          initial={{opacity:0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{type:'tween',delay:.3}}
      className=" text-[5rem] md:text-[8.9rem] font-[800]  ">
        Front-End Developer
      </motion.h1>
      <p className="mx-0 my-[2px] text-[1.4rem] leading-[39px] md:text-[2.2rem] font-[500] mb-[4rem]">
        Hello, I'm a Frontend Web Developer I strives to build immersive <br />{" "}
        and beautiful web applications through carefully crafted code and <br />{" "}
        user-centric design.
      </p>
      <motion.a
        whileTap={{ scale: 0.8 }}
        href="#projects"
        className="inlinle-block 
        cursor-pointer
        project-btn md:text-[3.1rem] 
        text-[2rem]
        font-bold 
        bg-blue py-[18px] md:py-[23px] 
        px-[50px]  md:px-[80px] border-2 border-black rounded-[8px]
relative
"
      >
        Projects
      </motion.a>
      <Image
        width={200}
        height={100}
        className="md:w-[30rem]  absolute -top-[42px] right-0"
        src="/hero-style.svg"
        alt="hero style svg"
      />
    </section>
  );
};
