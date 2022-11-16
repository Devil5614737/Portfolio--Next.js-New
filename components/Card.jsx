import Image from 'next/image'
import React from 'react'

export const Card = () => {
  return (
    <div className="border-4 border-black  rounded-[6px] overflow-hidden hover:shadow-card-shadow">
        <Image
        width={400}
        height={400}
        className=" border-2 border-black w-full h-[23rem] object-cover"
        src='https://images.unsplash.com/photo-1535882686-b1332af6f51e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt='project thumbnail'
        />
        <div className="body p-[27px]">
            <p className='text-[1.2rem] text-[#7C7C7C] uppercase'>ui-ux design</p>
            <h3 className='text-[2.1rem] font-[800]'>Netflix Clone</h3>
            <p className='text-[1.4rem] text-[#353535] my-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.</p>
            <a href="#!" className='text-[1.4rem] font-[800] px-[49px] py-[11px] bg-blue rounded-[8px] border-[3px]   border-black mt-5 inline-block'>Demo</a>
        </div>
    </div>
  )
}
