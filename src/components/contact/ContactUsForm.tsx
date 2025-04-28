'use client';

import { motion } from "motion/react";
import {Phone, Mail, MapPin} from 'lucide-react';

export default function ContactUsForm() {
    return (
        <motion.article className="flex flex-col-reverse lg:flex-row justify-between  my-20 gap-10">
            <form className="flex flex-col gap-10 border border-secondaryColor dark:border-secondaryDarkColor rounded-md p-4 md:p-10 w-full">
                <motion.div 
                    className="input-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <label htmlFor="username">Name</label>
                    <input className="input" type="text" id="username" name="username" />
                </motion.div>
                
                <motion.div 
                    className="input-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <label htmlFor="email">Email</label>
                    <input className="input" type="email" id="email" name="email" />
                </motion.div>

                <motion.div 
                    className="input-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </motion.div>
                <motion.input 
                    type="submit" 
                    value="Send" 
                    className="bg-accentsColor dark:bg-accentDarkColor p-2 rounded-md hover:scale-105 transition-all duration-500 cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </form>
            {/* contact info */}
            <motion.aside 
                className="w-full h-full border border-secondaryColor dark:border-secondaryDarkColor rounded-md p-4 md:p-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6 }}
            >
                <motion.main
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold">
                    Contact Information
                    </h2>
                </motion.main>
                <div className="mt-10 flex flex-col gap-8">
                    <motion.span 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <Phone />
                        <p>+1234 387 6900</p>
                    </motion.span>
                    <motion.span 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                    >
                        <Mail />
                        <p>info@EShop.com</p>
                    </motion.span>
                    <motion.span 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                    >
                        <MapPin />
                        <p>Gate 5 Portweefiq, Suez, Egypt</p>
                    </motion.span>
                </div>
            </motion.aside>
        </motion.article>
    );
};