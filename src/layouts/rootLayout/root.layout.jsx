import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";
import { CartContext } from "../../providers/cartContext";

function RootLayout() {

    const [cart, setCart] = useState([]);

    const updateCart = (item) => {
        if (cart.find(el => el.id === item.id)) {
            return setCart(cart.map(el => el.id === item.id ? { ...el, count: el.count + 1 } : { ...el }))
        }
        return setCart([...cart, { ...item, count: 1 }]);
    }

    return (
        <CartContext.Provider value={{ cart, updateCart }}>
            <main className="bg-white inter">
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