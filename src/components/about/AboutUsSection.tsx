'use client';

import Image from "next/image";
import aboutUsImg1 from '../../../public/product-1.png';
import aboutUsImg2 from '../../../public/product-2.png';
import aboutUsImg3 from '../../../public/product-3.png';
import aboutUsImg4 from '../../../public/product-4.png';
import aboutUsImg5 from '../../../public/product-5.png';
import aboutUsImg6 from '../../../public/product-6.png';
import aboutUsImg7 from '../../../public/product-7.png';
import aboutUsImg8 from '../../../public/product-8.png';
import aboutUsImg9 from '../../../public/product-9.png';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from "react";
import MainHeading from "../MainHeading";

const productsImages = [
    aboutUsImg1, 
    aboutUsImg2, 
    aboutUsImg3,
    aboutUsImg4,
    aboutUsImg5,
    aboutUsImg6,
    aboutUsImg7,
    aboutUsImg8,
    aboutUsImg9,
]

export default function AboutUsSection () {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % productsImages.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    const imageDisplay = productsImages[index];

    return (
        <section className="container mt-20 text-mainTextColor dark:text-mainTextDarkColor">
            <MainHeading name="About Us">
                <>
                    At EShop Meets Clean, We are passionate about delivering high-quality, durable, 
                    <br /> 
                    and stylish sneakers that enhance your comfort and style.
                </>
            </MainHeading>
            <article className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center w-full gap-20 mt-28">
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}} 
                    className="leading-10 text-md sm:text-xl order-2 lg:order-1"
                >
                    Our mission to provide high-quality sneakers that not only look stylish but also provide exceptional comfort and durability.
                    Our carefully curated collection combines modern aesthetics with functional design to ensure that every step you take is supported and stylish.
                </motion.p>
                <aside className="relative order-1 lg:order-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -50}}
                            transition={{duration: 0.5, ease: 'easeInOut'}}
                            className="w-full"
                        >
                            <Image 
                                src={imageDisplay} alt="about us image" className="w-full" priority 
                            />
                        </motion.div>
                    </AnimatePresence>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{duration: 0.5, ease: 'easeInOut', delay: 0.5}} 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-90 sm:h-90 md:w-96 md:h-96 dark:bg-accentDarkColor bg-accentsColor rounded-full -z-10"
                    />
                </aside>
            </article>
        </section>
    )
}