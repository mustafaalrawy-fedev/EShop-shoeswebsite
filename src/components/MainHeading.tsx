'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MainHeading({name, children}: {name: string, children: React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const pathname = usePathname();
    const [key, setKey] = useState(pathname);
    
    // Reset animation when path changes
    useEffect(() => {
        setKey(pathname);
    }, [pathname]);

    return (
        <main ref={ref} key={key}>
            <motion.h1 
                initial={{opacity: 0, x: -100}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -100}}
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className="relative text-6xl mb-8 w-fit"
            >
                {name}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                    transition={{duration: 0.5, delay: 0.5, ease: 'easeInOut'}}  
                    className="absolute right-0 -bottom-2 w-20 h-0.5 bg-accentsColor dark:bg-accentDarkColor"
                />
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                    transition={{duration: 0.5, delay: 0.5, ease: 'easeInOut'}}  
                    className="absolute left-0 -top-0 w-20 h-0.5 bg-accentsColor dark:bg-accentDarkColor"
                />
            </motion.h1>
            <motion.p
                initial={{opacity: 0, y: -20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: -20}}
                transition={{delay: 0.6, duration: 0.5, ease: 'easeInOut'}}
                className="text-secondaryColor dark:text-secondaryDarkColor"
            >
                {children}
            </motion.p>
        </main>
    )
}