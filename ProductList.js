import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
