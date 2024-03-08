import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log(`Fetching Product in ${category} category...`);
        setProducts(["Clothes", "Household"]);
    }, [category]);

    return <div>ProductList</div>;
};

export default ProductList;
