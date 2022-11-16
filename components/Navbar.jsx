import React from "react";
import { Container } from "./Container";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export const Navbar = () => {

useEffect(()=>{
  const toggleNav=()=>{
    const menuBtn=document.querySelector('.hamburger');
    const links=document.querySelector('.links');

    menuBtn.addEventListener('click',()=>{
      links.classList.toggle('hidden')
    })
  };
  toggleNav()
},[])


  return (
    <nav>
      <Container>
        <div className="flex justify-between flex-wrap p-2 py-7">
          <a href="#!" className="text-[2.5rem] font-[700]">
            Kaushik
          </a>
          <Bars3Icon className="hamburger w-[25px] h-[25px] cursor-pointer md:hidden" />
          <ul className="hidden links w-full md:w-fit md:flex flex-col md:flex-row gap-[52px] md:gap-x-[52px] md:mt-0 mt-[2rem] mb:mt-0">
            <li className="mb-[2rem] md:mb-0 ">
              <a className="font-[500] text-[1.8rem] text-[#616161]" href="#!">
                Home
              </a>
            </li>
            <li className="mb-[2rem] md:mb-0 ">
              <a className="font-[500] text-[1.8rem] text-[#616161]" href="#projects">
                Projects
              </a>
            </li>
            <li className="mb-[2rem] md:mb-0 ">
              <a className="font-[500] text-[1.8rem] text-[#616161]" href="#skills">
                Skills
              </a>
            </li>
            <li className="mb-[2rem] md:mb-0 ">
              <a
                className="relative contact-btn text-[1.8rem] text-[#616161] bg-sky-blue rounded-[8px] border-2 border-black px-[2.4rem] py-[1rem] font-[500]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
