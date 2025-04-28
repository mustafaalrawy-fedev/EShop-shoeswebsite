'use client';

import Link from 'next/link';
import { Sun, Moon, Logs, SquareX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { toggleTheme } from '../store/slices/themeSlice';
import Cart from './Cart';
import Logo from './Logo';
import navLinks from '../app/links';

const NavbarLink = ({ 
    id, 
    name, 
    href, 
    className, 
    onClick 
}: { 
    id: number; 
    name: string; 
    href: string; 
    className: string;
    onClick?: () => void;
}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    
    return (
        <li key={id}>
            <Link 
                onClick={onClick}
                className={`
                    relative font-semibold transition-all duration-500
                    ${isActive 
                        ? 'text-mainTextDarkColor before:absolute before:content-"" before:bg-accentsColor before:w-18 before:h-18 before:rounded-full before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-z-1 z-9' 
                        : `${className} hover:text-accentsColor dark:hover:text-accentDarkColor`}`
                } 
                href={href}
            >
                {name}
            </Link>
        </li>
    );
};

const MobileNavbar = ({
    isMenuOpen, 
    setIsMenuOpen, 
    iconColor
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
    iconColor: string;
}) => {
    useEffect(() => {
        document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <ul className='flex md:hidden gap-10 items-center'>
                <button 
                    type='button' 
                    className='cursor-pointer' 
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Logs color={iconColor}/>
                </button>
            </ul>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.ul 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='container absolute top-0 left-0 w-full h-full bg-backgroundColor/90 dark:bg-backgroundDarkColor/90 flex items-center justify-center flex-col gap-12 z-10'
                    >
                        <div>
                            <button 
                                type='button' 
                                className='cursor-pointer fixed top-10 left-5' 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <SquareX color={iconColor}/>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-12">
                            {navLinks.map((link) => (
                                <NavbarLink
                                    key={link.id}
                                    {...link}
                                    className="text-mainTextColor dark:text-mainTextDarkColor"
                                    onClick={() => setIsMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    );
};

export default function Navbar() {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const iconColor = theme === 'light' ? 'black' : 'white';

    return (
        <>
            <motion.nav 
                initial={{ opacity: 0, y: -100 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'linear' }} 
                className="flex justify-between items-center h-28 container"
            >
                <MobileNavbar 
                    isMenuOpen={isMenuOpen} 
                    setIsMenuOpen={setIsMenuOpen} 
                    iconColor={iconColor}
                />
                
                <Logo />
                
                <ul className='md:flex hidden gap-10 items-center'>
                    {navLinks.map((link) => (
                        <NavbarLink
                            key={link.id}
                            {...link}
                            className="text-mainTextColor dark:text-mainTextDarkColor main-transition"
                        />
                    ))}
                </ul>
                
                <aside className='flex gap-10 items-center'>
                    <button 
                        type='button' 
                        className='cursor-pointer'
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {theme === 'light' ? <Moon /> : <Sun color='white'/>}
                    </button>
                    <Cart theme={theme}/>
                </aside>
            </motion.nav>
        </>
    );
}