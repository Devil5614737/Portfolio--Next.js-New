import React from 'react';
import {Container} from './Container';
import {Bars3Icon} from '@heroicons/react/24/solid';

export const Navbar = () => {
  return (
    <nav >
        <Container>
           <div className="flex justify-between flex-wrap p-2 py-7">
           <a href="#!" className="text-[2.5rem] font-[700]">Kaushik</a>
            <Bars3Icon className='w-[25px] h-[25px] cursor-pointer md:hidden'/>
            <ul className="hidden links w-full md:w-fit md:flex flex-col md:flex-row gap-[52px] md:gap-x-[52px] ">
                <li><a className='font-[500] text-[1.8rem] text-[#616161]' href="#!">Home</a></li>
                <li><a className='font-[500] text-[1.8rem] text-[#616161]' href="#!">Projects</a></li>
                <li><a className='font-[500] text-[1.8rem] text-[#616161]' href="#!">Skills</a></li>
                <li><a className='relative contact-btn text-[1.8rem] text-[#616161] bg-sky-blue rounded-[8px] border-2 border-black px-[2.4rem] py-[1rem] font-[500]' href="#!">Contact</a></li>
            </ul>
           </div>
        </Container>
    </nav>
  )
}
