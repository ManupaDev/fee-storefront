import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../providers/cartContext";

function Navigation() {

    const { cart } = useContext(CartContext);

    return (
        <nav className="flex items-center justify-between py-8">
            <div className=" flex items-center gap-x-16 ">
                <Link className="font-medium" to="/">OO</Link>
                <div className="flex items-center gap-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </div>
            </div>
            <div>
                <Link to="/cart">{cart.length} Cart</Link>
            </div>
        </nav>);
}

export default Navigation;