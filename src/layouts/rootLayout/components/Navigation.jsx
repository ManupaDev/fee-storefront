import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex items-center justify-between py-8">
            <div className=" flex items-center gap-x-16 ">
                <Link className="font-medium" to="/">OO</Link>
                <div className="flex items-center gap-x-4">
                    <Link className="font-medium" to="/">Home</Link>
                    <Link className="font-medium" to="/shop">Shop</Link>
                </div>
            </div>
            <div>
                <Link className="font-medium" to="/cart">Cart</Link>
            </div>
        </nav>);
}

export default Navigation;