import Image from 'next/image'
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Card = ({title,src,desc,tag,link}) => {
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
    
    className="border-4 border-black  rounded-[6px] overflow-hidden hover:shadow-card-shadow">
        <Image
        width={400}
        height={400}
        className=" border-2 border-black w-full h-[23rem] object-cover"
        src={src}
        alt='project thumbnail'
        />
        <div className="body p-[27px]">
            <p className='text-[1.2rem] text-[#7C7C7C] uppercase'>{tag}</p>
            <h3 className='text-[2.1rem] font-[800]'>{title}</h3>
            <p className='text-[1.4rem] text-[#353535] my-[8px]'>{desc}</p>
            <div className="mt-5 flex gap-x-4">
            <a rel='noreferrer' target='_blank' href={link} className='text-[1.4rem] font-[800] px-[30px] py-[11px] bg-blue rounded-[8px] border-[3px]   border-black  inline-block'>Demo</a>
            <a rel='noreferrer' target='_blank' href={link} className='text-[1.4rem] font-[800] px-[30px] py-[11px] bg-[#ff0055] rounded-[8px] border-[3px]   border-black  inline-block text-white'>Code</a>
            </div>
        </div>
    </motion.div>
  )
}
