import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function RootLayout() {
    return (
        <main className="px-32">
            <Navigation />
            <Outlet />
        </main>);
}

export default RootLayout;