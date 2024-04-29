function Tab({ category, selectedCategory, handleTabClick }) {

    if (selectedCategory === category.id) {
        return (<button className="border border-black px-2 py-1 rounded-md bg-black text-white" onClick={(e) => handleTabClick(category.id)}>
            {category.name}
        </button>)
    }

    return (
        <button className="border border-black px-2 py-1 rounded-md" onClick={(e) => handleTabClick(category.id)}>
            {category.name}
        </button>
    );
}

export default Tab;