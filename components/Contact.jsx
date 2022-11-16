import React from 'react'
import { Container } from './Container'

export const Contact = () => {
  return (
    <section id='contact'  className='p-2 mt-[5rem] bg-blue relative z-[-1] py-[6rem]'>
    <Container>
    <header>
<h5 className='text-[3rem] font-bold mb-[.6rem]'>Contact</h5>
</header>


<form className="relative z-50 form mt-[6rem] md:w-[70%]">
<label htmlFor="name" className='text-[2.4rem] inlilne-block'>Name</label>
<input required type="text" id="name" className='my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[8.9rem] text-[2rem] p-3 mb-[2rem]' />
<label htmlFor="email" className='text-[2.4rem] inlilne-block mt'>Email</label>
<input required type="text" id="email" className='my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[8.9rem] text-[2rem] p-3' />
<label htmlFor="message" className='text-[2.4rem] inlilne-block '>Message</label>
<textarea required type="text" id="message" className='my-[8px] block w-full border-[3px] border-black rounded-[9px] h-[17.9rem] text-[2rem] p-3 resize-none' />
<a href="#!" className='cursor-pointer relative submit-btn text-[2.4rem] font-bold bg-pink-secondary px-[5rem] py-[1rem] inline-block mt-5 rounded-[8px] border-[3px] border-black'>Submit</a>
</form>
    </Container>
</section>
  )
}
