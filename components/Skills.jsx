import Image from "next/image";
import React from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";

export const Skills = () => {
  return (
    <section className="p-2 mt-[5rem]">
      <Container>
        <header>
          <h3 className="text-[3rem] font-bold mb-[.6rem]">Skills</h3>
          <p className="text-[1.8rem] text-[#5A5A5A]">Tools and Techs I know</p>
        </header>

        <div className="skills mt-[5rem] grid grid-cols-4 gap-y-[4rem] md:grid-cols-5 md:gap-y-[60px] place-items-center">
      <Icon title='html' color='#FFCFCF' src='/html.svg'/>
      <Icon title='css' color='#CFBEFF' src='/css.svg'/>
      <Icon title='javascript' color='#EFFF8B' src='/javascript.svg'/>
      <Icon title='react' color='#C3FDF6' src='/react.svg'/>
      <Icon title='Next.js' color='#A4A4A4' src='/nextjs.svg'/>
      <Icon title='redux' color='#EDC8FF' src='/redux.svg'/>
      <Icon title='typescript' color='#C0E0FF' src='/typescript.svg'/>
      <Icon title='sass' color='#FFD9EC' src='/sass2.svg'/>
      <Icon title='node.js' color='#DAFFD2' src='/nodejs.svg'/>
      <Icon title='mongodb' color='#D7FFD3' src='/mongodb2.svg'/>
      <Icon title='tailwind' color='#00D8FF' src='/tailwind.svg'/>
        </div>
      </Container>
    </section>
  );
};
