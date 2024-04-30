function Tab({ category, selectedCategory, handleTabClick }) {

    if (selectedCategory === category.id) {
        return (<button className="border px-2 py-1 rounded-md bg-[#edeef1] " onClick={(e) => handleTabClick(category.id)}>
            {category.name}
        </button>)
    }

    return (
        <button className="border border-[#edeef1] px-2 py-1 rounded-md" onClick={(e) => handleTabClick(category.id)}>
            {category.name}
        </button>
    );
}

export default Tab;