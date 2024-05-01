import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";

function CartPage() {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <div className="min-h-screen">
                <h1 class="text-4xl font-semibold">Your Shopping Cart</h1>
                <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4  border-black p-4">
                    {
                        cart.length > 0 ? (cart.map((el) => {
                            return (
                                <div className="grid grid-cols-3 border p-2 rounded-xl">
                                    <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                                        <img src={el.image} alt="" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className="col-span-2 px-4">
                                        <h1 className="text-2xl font-semibold">{el.name}</h1>
                                        <p>{el.description}</p>
                                        <span className="block text-2xl font-semibold mt-2">$ {el.price}</span>
                                        <p className="mt-4 text-lg">Amount: {el.count}</p>
                                    </div>
                                </div>
                            );
                        })) : <p>No items in cart</p>
                    }
                </div>
            </div>
        </div>);
}

export default CartPage;