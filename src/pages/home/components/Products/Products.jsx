import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Tab from "./components/Tab";

function Products() {
    const products = [
        { categoryId: "1", id: "1", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "1", id: "2", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "1", id: "3", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "2", id: "4", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "2", id: "5", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "3", id: "6", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "4", id: "7", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "4", id: "8", name: "AirPods Max", price: "458.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
    ];
    const categories = [{ id: "ALL", name: "All" }, { id: "1", name: "Headphones" }, { id: "2", name: "Speakers" }, { id: "3", name: "Smart Watch" }, { id: "4", name: "Mobile Phone" }];

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const handleTabClick = (selectedCategoryId) => {
        setSelectedCategory(selectedCategoryId);
    }

    const filteredProducts = selectedCategory === "ALL" ? products : products.filter(el => el.categoryId === selectedCategory);

    return (
        <section className="py-8">
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>
            <div className="py-8">
                <div>
                    <div className="flex items-center gap-x-4">
                        {
                            categories.map((el) =>
                                (<Tab category={{ id: el.id, name: el.name }} selectedCategory={selectedCategory} handleTabClick={handleTabClick} />))
                        }
                    </div>
                    <div className="grid grid-cols-4 gap-6 border-black mt-4">
                        {
                            filteredProducts.map((product) => (<ProductCard {...product} />))
                        }
                    </div>
                </div>
            </div>
        </section>);
}

export default Products;