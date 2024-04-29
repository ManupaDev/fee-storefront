import ProductCard from "./components/ProductCard";

function Products() {

    const products = [
        { id: 1, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 2, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 3, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 4, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 5, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 6, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 7, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { id: 8, name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
    ];

    return (
        <section className="py-8">
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>
            <div className="py-8">
                <div className="grid grid-cols-4 gap-6 border-black">
                    {
                        products.map((product) => (<ProductCard {...product} />))
                    }
                </div>
            </div>
        </section>);
}

export default Products;