import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="py-8 ">
            <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
                <div className="flex flex-col justify-center p-16 gap-y-4">
                    <span className="block rounded-full px-2 py-1 text-xs  w-fit bg-[#febc26]">WEEKLY DISCOUNT</span>
                    <h1 className="text-6xl font-semibold">
                        Premium Product Online Shop
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos suscipit est autem quia? Voluptatem?</p>
                    <Link to="/shop" className="px-4 py-2 text-white font-medium bg-black rounded w-fit">Shop Now</Link>
                </div>
                <div className="border border-black"></div>
            </div>
        </section>
    );
}

export default Hero;