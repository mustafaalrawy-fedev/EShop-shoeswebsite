'use client';

import { getProducts, addToCart } from "@/store/slices/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from '../store/store';
import { useSelector } from 'react-redux';
import Image from "next/image";
import { motion } from "motion/react";

export default function ProductsSection() {
    const dispatch = useDispatch<AppDispatch>()
    const { products, loading, error } = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const handleAddToCart = (id: number) => {
        const product = products.find((product) => product.id === id);
        if (!product) return;
        dispatch(addToCart(product));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const className = 'text-mainTextColor dark:text-mainTextDarkColor';

    return (
        <section className="container my-20">
            <h1 className={`${className} text-3xl font-bold mb-10`}>
                Our Products
            </h1>
            <article className={`${className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3`}>
                {products.map((product, index) => (
                    <motion.div 
                        key={product.id} 
                        className="font-bold dark:bg-neutral-800 bg-gray-50 flex flex-col justify-center items-center p-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.15,
                            ease: "easeOut"
                        }}
                        // viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h2>{product.name}</h2>
                        <motion.div
                            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={product.image} alt={product.name} width={200} height={200} />
                        </motion.div>
                        <p>{product.price} <span className="mr-2">$</span></p>
                        <motion.button 
                            className={`cursor-pointer mt-10 py-2 px-6 rounded dark:bg-accentDarkColor bg-accentsColor m-1 text-mainTextDarkColor`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleAddToCart(product.id)}
                        >
                            Add Item
                        </motion.button>
                    </motion.div>
                ))}
            </article>
        </section>
    )
}