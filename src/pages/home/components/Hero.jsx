import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="py-16">
            <div className="border grid grid-cols-2 border-black min-h-[60vh]">
                <div className="flex flex-col justify-center p-16 gap-y-4">
                    <span className="block rounded-full px-2 py-1 text-xs border border-black w-fit">WEEKLY DISCOUNT</span>
                    <h1 className="text-6xl font-semibold">
                        Premium Product Online Shop
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos suscipit est autem quia? Voluptatem?</p>
                    <Link to="/shop" className="px-4 py-2 border border-black rounded w-fit">Shop Now</Link>
                </div>
                <div className="border border-black"></div>
            </div>
        </section>
    );
}

export default Hero;