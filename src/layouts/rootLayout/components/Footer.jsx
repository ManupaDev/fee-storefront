import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="py-16 grid grid-cols-3 px-32 bg-[#f4f9ff]">

            <div className="col-span-1">
                <Link className="font-semibold text-2xl" to="/">OO</Link>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit veniam omnis, placeat iste tempore.</p>
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold">Accepted Payments</h1>
                    <div className="border border-black h-16 mt-4">
                    </div>
                </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-x-4">
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-semibold">Make Money</h1>
                        <ul className="mt-2">
                            <li>Sell your device</li>
                            <li>Sell your services</li>
                            <li>Sell your apps</li>
                            <li>Become an affliate</li>
                            <li>Advertise your products</li>
                            <li>Become a vendor</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Product</h1>
                        <ul className="mt-2">
                            <li>Apple</li>
                            <li>Camera & photo</li>
                            <li>Cell phones</li>
                            <li>Computers & accessories</li>
                            <li>Headphones</li>
                            <li>Smart watches</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-semibold">Let Us Help You</h1>
                        <ul className="mt-2">
                            <li>Your account</li>
                            <li>Your orders</li>
                            <li>Returns & replacements</li>
                            <li>Shipping rates & policies</li>
                            <li>Refund and returns policy</li>
                            <li>Terms and conditions</li>
                            <li>Help center</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Know Us</h1>
                        <ul className="mt-2">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>);
}

export default Footer;