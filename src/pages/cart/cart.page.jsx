import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";

function CartPage() {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <div className="min-h-screen">
                <h1 className="text-3xl font-semibold">Cart Page</h1>
                <div className="mt-4 grid gap-y-4">
                    {
                        cart.map((el) => {
                            return (
                                <div className="border border-black px-4 py-2 rounded-md w-96">
                                    <h2 className="text-xl">{el.name}</h2>
                                    <h2 className="text-xl font-semibold">${el.price}</h2>
                                    <h2 className="text-base">Amount <span className="font-semibold">{cart.filter(item => item.id === el.id).length}</span></h2>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>);
}

export default CartPage;