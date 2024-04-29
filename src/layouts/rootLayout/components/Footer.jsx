import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="py-16 grid grid-cols-3 gap-x-8 border border-black px-32">
            <div>
                <Link className="font-medium text-2xl" to="/">OO</Link>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit veniam omnis, placeat iste tempore.</p>
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold">Accepted Payments</h1>
                    <div className="border border-black h-16 mt-4">
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-2xl font-semibold">Make Money</h1>
                    <ul className="mt-2">
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Product</h1>
                    <ul className="mt-2">
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-2xl font-semibold">Let Us Help You</h1>
                    <ul className="mt-2">
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">Know Us</h1>
                    <ul className="mt-2">
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                        <li className="text-lg">Lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </section>);
}

export default Footer;