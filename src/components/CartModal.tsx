import { removeFromCart, clearCart, addToCart } from "@/store/slices/cartSlice";
import { Product } from "@/types/Product";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const CartProduct = (
    { cart, handleRemoveFromCart, handleAddToCart, totalPrice }: 
    { cart: Product[], handleRemoveFromCart: (id: number) => void, handleAddToCart: (product: Product) => void, totalPrice: number }
) => {

    const ActionsBtnClass = "cursor-pointer w-7 h-7 flex items-center justify-center font-bold text-lg bg-accentsColor dark:bg-accentsDarkColor text-mainTextColor dark:text-mainTextDarkColor";

    if (cart.length === 0) {
        return <p className="text-center text-md dark:text-mainTextDarkColor/50 text-mainTextColor/50 mt-3">No items in cart</p>;
    }


    return (
        <ul className="overflow-y-scroll flex flex-col gap-2">
                {cart.map((product) => (
                    <li key={product.id} className="flex items-center justify-between bg-cardColor dark:bg-cardDarkColor p-2">
                        <div>
                        <p className="text-sm dark:text-mainTextDarkColor text-mainTextColor mb-3 text-left">
                            {product.price} <span className="text-sm dark:text-mainTextDarkColor text-mainTextColor">$</span>
                        </p>
                            <Image src={product.image} alt={product.name} width={50} height={50} />
                            <h3 className="text-sm dark:text-mainTextDarkColor text-mainTextColor mt-3">{product.name}</h3>
                        </div>
                        {/* Product Total Price */}
                        <p className="text-sm dark:text-mainTextDarkColor/50 text-mainTextColor/50 mr-2">
                            {product.price * (product.quantity || 1)} 
                            <span className="text-sm dark:text-mainTextDarkColor/50 text-mainTextColor/50">
                                $
                            </span>
                        </p>
                        {/* Action Btns */}
                        <div className="flex items-center">
                            <button className={ActionsBtnClass} type="button" onClick={() => handleRemoveFromCart(product.id)}>-</button>
                            <span className="text-sm dark:text-mainTextDarkColor text-mainTextColor mx-4">{product.quantity}</span>
                            <button className={ActionsBtnClass} type="button" onClick={() => handleAddToCart(product)}>+</button>
                        </div>
                    </li>
                ))}
                {/* Total Price */}
                <p className="text-sm dark:text-mainTextDarkColor/70 text-mainTextColor/70 my-5 text-center">
                    Total: <span className="font-bold text-accentsColor dark:text-accentsDarkColor">{totalPrice}</span> $
                </p>
            </ul>
    )
}

export default function CartModal(
    { isOpen, cart, totalPrice }:   
    { isOpen: boolean, cart: Product[], totalPrice: number }
) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <motion.article 
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={isOpen? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            initial={{ opacity: 0, y: 0 }}
            animate={isOpen? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className={` 
                flex flex-col justify-between
                absolute right-0 mt-5 bg-backgroundColor dark:bg-backgroundDarkColor shadow-2xl w-80 h-80 p-5 z-2
                `}
        >
            <h1 className="text-2xl font-bold dark:text-mainTextDarkColor text-mainTextColor border-b border-mainTextColor dark:border-mainTextDarkColor pb-4">Cart</h1>
            {/* Cart Products */}
            <CartProduct
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddToCart={handleAddToCart}
                totalPrice={totalPrice}
            />
            <div className="text-center p-1 rounded-md bg-accentsColor dark:bg-accentsDarkColor font-bold dark:text-mainTextDarkColor text-mainTextColor">
                <button type="button" onClick={handleClearCart}>Clear Cart</button>
            </div>
        </motion.article>
    )
}