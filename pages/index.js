import Image from 'next/image'
import React from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

function Home() {
  return (
  <>
  <header className='relative min-h-[70vh] w-[100vw] '>
    <Navbar/>
    <Hero/>
    <Image
      width={100}
      height={100}
      className=" md:block md:w-[20rem]  absolute -bottom-[10rem] -left-20"
      src='/cross.svg'
      alt='cross svg'
      />
    <Image
      width={100}
      height={100}
      className="hidden md:block md:w-[20rem]  absolute -bottom-[10rem] -right-20"
      src='/triangle.svg'
      alt='triangle svg'
      />
  </header>
  <main>
    <Projects/>
    <About/>
    <Skills/>
    <Contact/>
  </main>
 <Footer/>
  </>
  )
}

export default Home;