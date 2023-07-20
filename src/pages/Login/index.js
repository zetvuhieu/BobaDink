import React, { useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 },
        { id: 5, name: 'Product 5', price: 50 },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const check = cart.find((item) => item.id === product.id);
        if (check) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}{' '}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
