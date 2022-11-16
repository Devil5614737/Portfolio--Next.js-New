import Image from "next/image";
import React, { useEffect } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useScroll,motion } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toTopBtn=document.querySelector('.to-top');
    const handleScrollTop = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 800) {
          toTopBtn.classList.remove('hidden');
        } else {
          toTopBtn.classList.add('hidden');
        }
      });
    };
    handleScrollTop();
  });

  return (
    <>
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
    ></motion.div>
      <header className=" min-h-[70vh] w-[100vw]">
        <Navbar />
        <Hero />
        <Image
          width={100}
          height={100}
          className=" md:block md:w-[20rem]  absolute -bottom-[10rem] -left-20"
          src="/cross.svg"
          alt="cross svg"
        />
        <Image
          width={100}
          height={100}
          className="hidden md:block md:w-[20rem]  absolute -bottom-[10rem] -right-20"
          src="/triangle.svg"
          alt="triangle svg"
        />
      </header>
      <main>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
        <motion.a
         whileTap={{ scale: 0.8 }}
         whileHover={{ scale: 1.2 }}
          href="#hero"
          className="hidden to-top border-2 border-black fixed top-[86%] right-10 bg-[#ff0055] p-4  rounded-[8px] cursor-pointer z-50"
        >
          <ArrowUpIcon className="w-14 h-14 text-white" />
        </motion.a>

    </>
  );
}

export default Home;
