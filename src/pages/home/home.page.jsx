import Hero from "./components/Hero";
import Products from "./components/Products/Products";
import Services from "./components/Services";

function HomePage() {
    return (
        <div>
            <Hero />
            <Products />
            <Services />
        </div>
    );
}

export default HomePage;