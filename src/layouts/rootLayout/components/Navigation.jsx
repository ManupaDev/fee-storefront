import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex items-center">
            <Link to="/">OO</Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Categories</Link>                
            </div>
        </nav>);
}

export default Navigation;