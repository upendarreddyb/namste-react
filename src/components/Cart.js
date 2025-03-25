import { Provider, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">cart</h1>
            <div className=" w-6/12 m-auto">
                <button onClick={() => handelClearCart()} className="p-2 m-2 bg-black text-white rounded-lg">Clear cart</button>
                {cartItems.length === 0 && <h2>Cart empty, add items to the cart!</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>


    )
}
export default Cart;