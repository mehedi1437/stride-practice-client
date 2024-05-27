import { useEffect, useState } from "react";
import CardItems from "../../cards/CardItems";

const Allproducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <p className="my-7 text-6xl text-center">Buy our products</p>
            
            {products ? <p>{products.length}</p> : <p>Loading...</p>}
            <div className="grid grid-cols-3">
                {products?.map(product => <CardItems key={product.id} product={product}></CardItems>)}
            </div>
        </div>
    );
};

export default Allproducts;