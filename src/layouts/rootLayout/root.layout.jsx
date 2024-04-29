import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function RootLayout() {
    return (
        <main>
            <div className="px-32">
                <Navigation />
                <Outlet />
            </div>
            <Footer />
        </main>);
}

export default RootLayout;