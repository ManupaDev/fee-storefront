import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Tab from "./components/Tab";
import { getAllProducts } from "../../../../services/api/products";
import { categories } from "./data/categories";

function Products() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data)
        }).catch((e) => {
            setIsError(true);
            setError(e.message);
        }).finally(() => setIsLoading(false));
    }, []);

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const handleTabClick = (selectedCategoryId) => {
        setSelectedCategory(selectedCategoryId);
    }

    const filteredProducts = selectedCategory === "ALL" ? products : products.filter(el => el.categoryId === selectedCategory);

    if (isLoading) {
        return (
            <section className="py-8">
                <h1 className="text-4xl font-semibold">Our Top Products</h1>
                <div className="border mt-4"></div>
                <div className="py-8">
                    <div>
                        <div className="flex items-center gap-x-4">
                            {
                                categories.map((el) =>
                                    (<Tab key={el.id} category={{ id: el.id, name: el.name }} selectedCategory={selectedCategory} handleTabClick={handleTabClick} />))
                            }
                        </div>
                        <div className="grid grid-cols-4 gap-8 border-black mt-4">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </div>
            </section>);
    }

    if (isError) {
        return (
            <section className="py-8">
                <h1 className="text-4xl font-semibold">Our Top Products</h1>
                <div className="border mt-4"></div>
                <div className="py-8">
                    <div>
                        <div className="flex items-center gap-x-4">
                            {
                                categories.map((el) =>
                                    (<Tab key={el.id} category={{ id: el.id, name: el.name }} selectedCategory={selectedCategory} handleTabClick={handleTabClick} />))
                            }
                        </div>
                        <div className="grid grid-cols-4 gap-6 border-black mt-4">
                            <h1 className="text-red-500">{`Error: ${error}`}</h1>
                        </div>
                    </div>
                </div>
            </section>);
    }

    return (
        <section className="py-8">
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>
            <div className="py-8">
                <div>
                    <div className="flex items-center gap-x-4">
                        {
                            categories.map((el) =>
                                (<Tab key={el.id} category={{ id: el.id, name: el.name }} selectedCategory={selectedCategory} handleTabClick={handleTabClick} />))
                        }
                    </div>
                    <div className="grid grid-cols-4 gap-6 border-black mt-4">
                        {
                            filteredProducts.map((el) => (<ProductCard key={el.id} {...el} />))
                        }
                    </div>
                </div>
            </div>
        </section>);
}

export default Products;