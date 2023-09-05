import React from 'react';

function Products({ products, addToCart }) {
    return (
        <div className="product-list">
            <h2>Danh sách sản phẩm</h2>
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Giá: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
