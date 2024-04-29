import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex items-center justify-between py-8">
            <div className=" flex items-center gap-x-16 ">
                <Link className="font-medium text-lg" to="/">OO</Link>
                <div className="flex items-center gap-x-4">
                    <Link className="font-medium text-lg" to="/">Home</Link>
                    <Link className="font-medium text-lg" to="/shop">Shop</Link>
                </div>
            </div>
            <div>
                <Link className="font-medium text-lg" to="/cart">Cart</Link>
            </div>
        </nav>);
}

export default Navigation;