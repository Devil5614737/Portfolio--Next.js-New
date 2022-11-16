import Image from "next/image";
import React from "react";
import { Container } from "./Container";
import {ArrowDownTrayIcon} from '@heroicons/react/24/solid';

export const About = () => {
  return (
    <section className=" z-20 p-2 mt-[5rem] relative bg-sky-blue py-[5rem]  overflow-hidden">
      <Container>
        <header>
          <h4 className="text-[3rem] font-bold mb-[.6rem]">About</h4>
        </header>

        <div className="grid md:grid-cols-2 gap-[41px] mt-[50px] ">
          <Image
            width={400}
            height={400}
            className=" w-full h-[53rem] object-cover md:w-[50rem] md:h-[50rem]"
            src="/me.png"
            alt="project thumbnail"
          />
          <div className="text md:self-center">
            <p className="text-[3rem] leading-[50px] font-[500]">
              Hello!! my name is `Kaushik Sheel` passionate FrontEnd Web
              Developer, love to build amazing products and solving problems. If
              you have any project or job feel free to contact me..
            </p>
            <a
            download
            rel="noreferrer"
            target={'_blank'}
              href="https://drive.google.com/file/d/1L3w63jNWT7xCcE2hRBRNCyB3zDvP5njP/view?usp=share_link"
              className="resume-btn border-2 border-black rounded-[7px] text-[2.5rem] font-[500]  mt-[36px] px-[44px] py-[10px] relative bg-white flex w-fit items-center gap-x-6 cursor-pointer  "
            >
              <ArrowDownTrayIcon className="w-10 h-10 mb-2"/>
              Resume
            </a>
          </div>
        </div>
      </Container>
      <Image
            width={400}
            height={400}
            className=" hidden md:block absolute bottom-0 -right-[25rem] w-[60rem] h-[53rem] object-cover"
            src="/about-style.svg"
            alt='ring svg'
           
          />
    </section>
  );
};
