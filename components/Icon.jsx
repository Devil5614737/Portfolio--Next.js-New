import { motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react';


export const Icon = ({title,color,src}) => {
  return (
    <motion.div
    whileTap={{ scale: 0.8 }}
    whileHover={{ scale: 1.2 }}
    className="skill  w-fit cursor-pointer">
    <div className="rounded-[8px]  w-fit p-[2rem] border-2 border-black" style={{background:color}}>
    <Image src={src} width={30} height={30} alt='skills icon'/>
    </div>
    <p className="text-center font-[500] text-[1.5rem] mt-3 uppercase">{title}</p>
    </motion.div>
  )
}
