'use client';

import Image from "next/image";
import landingImg from '../../public/landingPhoto-Photoroom.png';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "motion/react";

const textInfo: string[] = ['Style', 'Fashion', 'Elegance', 'Luxury', 'Premium', 'Elegant', 'Luxurious'];

export default function LandingSection() {
    const [displayText, setDisplayText] = useState(textInfo[0]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % textInfo.length;
            setIndex(nextIndex);
            setDisplayText(textInfo[nextIndex]);
        }, 2000);
        
        return () => clearInterval(intervalId);
    }, [index]);
    
    return (
        <section className="container flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:h-[calc(100dvh-112px)] relative -z-1">
        <motion.main
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'linear' }}}
          // viewport={{ once: true }}
          className="lg:w-1/2 w-full lg:text-left text-center"
        >
          <h1 className="text-6xl sm:text-8xl leading-24 sm:leading-32 text-mainTextColor dark:text-mainTextDarkColor transition-all duration-500">
            Step Into <br /> 
            <AnimatePresence mode="wait">
              <motion.span
                key={displayText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
                className='relative before:absolute before:content-"" before:bg-accentsColor dark:before:bg-accentsDarkColor before:w-20 before:h-20 sm:before:w-35 sm:before:h-35 before:rounded-full before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-z-1 z-9'>
                {displayText}
              </motion.span>
            </AnimatePresence>
          </h1>
          <button className="w-full sm:w-fit bg-accentsColor text-mainTextColor dark:text-mainTextDarkColor px-10 py-4 rounded-md font-semibold mt-14 text-center cursor-pointer main-transition hover:bg-mainTextColor dark:hover:bg-mainTextDarkColor hover:text-mainTextDarkColor dark:hover:text-mainTextColor">
            Shop Now
          </button>
        </motion.main> 
        <motion.aside 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          // viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          <Image src={landingImg} alt="landing Image" className="w-full" priority/>
        </motion.aside>
      </section>
    );
}