import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: 'ok',
        itemTypeId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProduct({
                ...product,
                image: reader.result, // Store the base64-encoded image data
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const [itemTypes, setItemTypes] = useState([]);

    const getItemTypes = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        axios
            .get('http://localhost:80/api/managers/itemtypes', { headers: { authorization: user.token } })
            .then((reponse) => {
                setItemTypes(reponse.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        const user = JSON.parse(localStorage.getItem('user'));
        axios
            .post('http://localhost:80/api/managers/itemtypes/1/items', product, {
                headers: { authorization: user.token },
            })
            .then((response) => {
                console.log('Product Data Sent:', response.data);
                alert('thành công');
            })
            .catch((error) => {
                console.error('Error Sending Product Data:', error);
                alert('thất bại');
            });
    };

    useEffect(() => {
        getItemTypes();
    }, []);

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    {/* Custom styling for the product category */}
                    <label htmlFor="category" style={{ marginRight: '10px' }}>
                        Category:
                    </label>
                    <select
                        id="itemTypeId"
                        name="itemTypeId"
                        value={product.itemTypeId}
                        onChange={handleChange}
                        required
                        style={{ padding: '5px' }}
                    >
                        {itemTypes.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Product Image:</label>
                    <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" required />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
