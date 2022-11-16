import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative px-3 md:px-0 place-items-center m-auto text-center mt-[11rem] w-fit">
      <h1 className=" text-[5rem] md:text-[8.9rem] font-[800]">
        Hello, I'm Kaushik
      </h1>
      <p className="mx-0 my-[22px] text-[1.4rem] leading-[39px] md:text-[2.2rem] font-[500] mb-[4rem]">
        Hello, I'm a Frontend Web Developer I strives to build immersive <br />{" "}
        and beautiful web applications through carefully crafted code and <br />{" "}
        user-centric design.
      </p>
      <a
        href="#!"
        className="inlinle-block project-btn md:text-[3.1rem] 
        text-[2rem]
        font-bold 
        bg-blue py-[18px] md:py-[23px] 
        px-[50px]  md:px-[80px] border-2 border-black rounded-[8px]
relative
"
      >
        Projects
      </a>
      <Image
        width={200}
        height={100}
        className="md:w-[30rem]  absolute -top-[42px] right-0"
        src="/hero-style.svg"
      />
    </section>
  );
};
