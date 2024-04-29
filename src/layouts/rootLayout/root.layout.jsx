import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";
import { CartContext } from "../../providers/cartContext";

function RootLayout() {

    const [cart, setCart] = useState([]);

    const updateCart = (item) => {
        setCart([...cart, item]);
    }

    return (
        <CartContext.Provider value={{ cart, updateCart }}>
            <main>
                <div className="px-32">
                    <Navigation />
                    <Outlet />
                </div>
                <Footer />
            </main>
        </CartContext.Provider>
    );
}

export default RootLayout;