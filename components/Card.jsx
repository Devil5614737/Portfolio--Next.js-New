import Image from 'next/image'
import React from 'react'

export const Card = ({title,src,desc,tag,link}) => {
  return (
    <div className="border-4 border-black  rounded-[6px] overflow-hidden hover:shadow-card-shadow">
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
            <a rel='noreferrer' target='_blank' href={link} className='text-[1.4rem] font-[800] px-[49px] py-[11px] bg-blue rounded-[8px] border-[3px]   border-black mt-5 inline-block'>Demo</a>
        </div>
    </div>
  )
}
