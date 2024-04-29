const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export const getAllProducts = async () => {
    await sleep(2000);
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
    return products;
}