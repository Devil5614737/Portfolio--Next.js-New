import Image from 'next/image'
import React from 'react'
import { Card } from './Card'
import { Container } from './Container'

export const Projects = () => {
  return (
    <section className='p-2 mt-[25rem]'>
<Container>
<header>
    <h2 className='text-[3rem] font-bold mb-[.6rem]'>Projects</h2>
    <p className='text-[1.8rem] text-[#5A5A5A]'>Here are some of my projects</p>
</header>

<div className="projects mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</div>

</Container>

    </section>
  )
}
