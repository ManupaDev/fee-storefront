function Services() {
    return (
        <section className="py-8">
            <h1 className="text-4xl font-semibold">Services To Help You Shop</h1>
            <div className="border mt-4"></div>
            <div className="py-8 grid grid-cols-3 gap-x-8">
                <ServiceCard title="Frequenly Asked Questions" subtitle="Updates on safe shopping in our stores" image="/assets/services/faq.jpg" />
                <ServiceCard title="Online Payment Process" subtitle="Updates on safe shopping in our stores" image="/assets/services/online-pay.jpg" />
                <ServiceCard title="Home Delivery Options" subtitle="Updates on safe shopping in our stores" image="/assets/services/delivery.jpg" />
            </div>
        </section>);
}

export default Services;

function ServiceCard({ image, title, subtitle }) {
    return (
        <div className="bg-[#f4f8f9] rounded-lg">
            <div className="h-48">
                <img src={image} alt="" className="rounded-lg rounded-b-none h-full w-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-medium">{title}</h2>
                <p className="text-sm">{subtitle}</p>
            </div>
        </div>
    );
}
