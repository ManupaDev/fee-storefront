import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../providers/cartContext";
import { ShoppingCart } from "lucide-react";

function Navigation() {

    const { cart } = useContext(CartContext);

    return (
        <nav className="flex items-center justify-between py-8">
            <div className=" flex items-center gap-x-16 ">
                <Link className="font-semibold text-3xl" to="/">Mebius</Link>
                <div className="flex items-center gap-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </div>
            </div>
            <div className="flex items-center gap-x-8">
                <div>
                    <Link to="/cart" className="flex items-center gap-x-4 relative">
                        <p className="text-lg">{cart.reduce((acc, el) => acc += el.count, 0)}</p>
                        <div className="flex items-center gap-x-2">
                            <ShoppingCart />
                            Cart
                        </div>
                    </Link>
                </div>
                <p>Hi, Manupa</p>
            </div>

        </nav>);
}

export default Navigation;