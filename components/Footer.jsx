import Image from 'next/image';
import React from 'react';
import {Container} from './Container';

export const Footer = () => {
  return (
<footer className='p-2  bg-black py-[6rem]'>
    <Container>
        <div className="flex justify-between items-center">
            <div className="flex gap-x-[2rem]">
                <a rel='noreferrer' target={'_blank'} href="https://www.linkedin.com/in/kaushik-sheel/">
                    <Image
                    src='/linkedin.svg'
                    width={30}
                    height={30}
                    alt='linkedin icon'
                    />
                </a>
                <a href="#!">
                    <Image
                    src='/github.svg'
                    width={34}
                    height={34}
                    alt='github icon'
                    />
                </a>
            </div>
            <a rel='noreferrer' href="https://github.com/Devil5614737" className='text-white flex items-center text-2xl gap-x-2'>
            <Image
                    src='/call.svg'
                    width={34}
                    height={34}
                    alt='call icon'
                    />
                    +917054557596
            </a>
        </div>
    </Container>
</footer>
  )
}
