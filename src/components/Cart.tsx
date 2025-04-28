import { ShoppingBag } from "lucide-react";
import CartBadge from "./CartBadge";
import CartModal from "./CartModal";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/store/slices/modelSlice";

export default function Cart({ theme }: { theme: string }) {
    const { isOpen } = useSelector((state: RootState) => state.model);
    const dispatch = useDispatch();
    
    const handleToggleModal = () => {
        dispatch(toggleModal());
    };

    const {cart} = useSelector((state: RootState) => state.cart);

    const totalPrice = Math.trunc(cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0));

    const countBadge = cart.reduce((sum, items) => sum + (items.quantity || 1), 0)

    
    return (
        <aside className="relative">
            <ShoppingBag className="cursor-pointer" color={theme === 'light' ? 'black' : 'white'} onClick={handleToggleModal}/>
            <CartBadge 
                count={countBadge} 
                handleToggleModal={handleToggleModal}
            />
            <CartModal 
                isOpen={isOpen} 
                cart={cart} 
                totalPrice={totalPrice}
            />
        </aside>
    )
}