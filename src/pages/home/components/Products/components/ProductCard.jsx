import { Heart } from "lucide-react";

function ProductCard({ id, name, price, description }) {
    return (
        <div className="h-96 relative">
            <Heart className="absolute top-4 right-4" />
            <div className="h-60 border rounded-xl">

            </div>
            <div className="mt-4">
                <div className=" flex items-center justify-between">
                    <span className="block text-2xl font-semibold">{name}</span>
                    <span className="block font-semibold">${price}</span>
                </div>
                <p>{description}</p>
                <div className="mt-2">
                    <button className="border border-black px-4 py-1 text-lg rounded-lg mt-2 font-semibold">Add To Cart</button>
                </div>
            </div>
        </div>);
}

export default ProductCard;