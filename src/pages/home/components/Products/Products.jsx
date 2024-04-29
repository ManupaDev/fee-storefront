import ProductCard from "./components/ProductCard";

function Products() {
    return (
        <section>
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>

            <div className="py-8">
                <div className="grid grid-cols-4 gap-6 border-black">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>);
}

export default Products;