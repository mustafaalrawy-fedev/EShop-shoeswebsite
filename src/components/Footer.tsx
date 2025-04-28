'use client';

import Logo from "./Logo";
import {Facebook, Instagram, Twitter, Linkedin} from 'lucide-react'
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            // viewport={{ once: true }}
            className="mt-40 pt-5 pb-20 bg-cardColor dark:bg-cardDarkColor border border-t-secondaryColor dark:border-t-secondaryDarkColor"
        >
            <section className="container">
            <main className="flex items-center justify-between w-full">
                <Logo />
            </main>
            <article className="flex flex-col-reverse md:flex-row gap-20 items-center justify-between w-full mt-20">
                {/* social */}
                <aside >
                    <div className="flex items-center gap-4">
                        <Facebook className='text-facebookColor'/>
                        <Instagram className='text-instagramColor'/>
                        <Twitter className='text-twitterColor'/>
                        <Linkedin className='text-linkedInColor'/>
                    </div>
                    <div className="dark:text-mainTextDarkColor/60 text-mainTextColor/60 mt-10">
                        <p>@2025 EShoes. All rights reserved.</p>
                    </div>
                </aside>
                {/* Subscription */}
                <div className="">
                    <h1 className="dark:text-mainTextDarkColor text-mainTextColor mb-10">Subscribe To Our NewsLetter</h1>
                    <input type="email" placeholder="Enter your email" className="dark:text-mainTextDarkColor text-mainTextColor border border-secondaryColor dark:border-secondaryDarkColor rounded-l-md p-2 outline-none"/>
                    <button type="submit" className="bg-accentsColor dark:bg-accentDarkColor text-mainTextColor rounded-r-md py-2 px-4 border border-secondaryColor dark:border-secondaryDarkColor cursor-pointer hover:bg-accentsColor dark:hover:bg-accentDarkColor scale-100 hover:scale-105 transition-all duration-300 ease-in-out">Subscribe</button>
                </div>
            </article>
            </section>
        </motion.footer>
    )
}