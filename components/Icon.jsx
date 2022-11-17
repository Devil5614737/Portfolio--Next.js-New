
import Image from 'next/image'
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export const Icon = ({title,color,src}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const exampleVariant = {
   visible: { opacity: 1, scale: 1, transition: { duration: 0.5} },
  hidden: { opacity: 0, scale: 0 }
  }



  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
    ref={ref}
    variants={exampleVariant}
    initial="hidden"
    animate={control}
    className="skill  w-fit cursor-pointer">
    <div className="rounded-[8px]  w-fit p-[2rem] border-2 border-black" style={{background:color}}>
    <Image src={src} width={30} height={30} alt='skills icon'/>
    </div>
    <p className="text-center font-[500] text-[1.5rem] mt-3 uppercase">{title}</p>
    </motion.div>
  )
}
