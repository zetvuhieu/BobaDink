import React, { useState, useEffect } from 'react';
import Header from '~/components/Layout/Header/';
import Footer from '~/components/Layout/Footer/';
import className from 'classnames/bind';
import styles from './products.modules.scss';
import { Card, CardContent, Typography, Button, Grid, Paper } from '@mui/material';
import '@mui/material/styles';
import smoothie1 from '~/assets/img/products/smoothie/sinhtoxoai.jpg';
import smoothie2 from '~/assets/img/products/smoothie/sinhtodautay.jpg';
import tea1 from '~/assets/img/products/tea/traxanhvichanh.jpg';
import tea2 from '~/assets/img/products/tea/traxanhdualeo.jpg';
import tea3 from '~/assets/img/products/tea/traxanhbuoi.jpg';
import tea4 from '~/assets/img/products/tea/traxanhdailoan.jpg';
import tea5 from '~/assets/img/products/tea/traolong.jpg';
import tea6 from '~/assets/img/products/tea/traolongdao.jpg';
import milktea1 from '~/assets/img/products/milk_tea/trasuachocolate.jpg';
import milktea2 from '~/assets/img/products/milk_tea/trasuadoubletea.jpg';
import milktea3 from '~/assets/img/products/milk_tea/trasuakhoaimon.jpg';
import milktea4 from '~/assets/img/products/milk_tea/trasuangoctrai.jpg';
import milktea5 from '~/assets/img/products/milk_tea/trasuakiwi.jpg';
import milktea6 from '~/assets/img/products/milk_tea/trasuahuongnho.jpg';
import juice1 from '~/assets/img/products/juice/nuocepchanhda.jpg';
import juice2 from '~/assets/img/products/juice/nuocepchanhday.jpg';
import juice3 from '~/assets/img/products/juice/nuocepdautay.jpg';

const cx = className.bind(styles);

const products = [
    { id: 1, name: 'Nước ép dâu tây', price: 55, src: juice3, styles: 'juice', discountPercentage: 0 },
    { id: 2, name: 'Nước ép cam', price: 45, src: smoothie1, styles: 'juice', discountPercentage: 0 },
    { id: 3, name: 'Sinh tố xoài aloha', price: 55, src: smoothie1, styles: 'smoothie', discountPercentage: 0 },
    { id: 4, name: 'Trà xanh matcha', price: 45, src: tea2, styles: 'tea', discountPercentage: 0 },
    { id: 5, name: 'Trà xanh vị chanh', price: 42, src: tea1, styles: 'tea', discountPercentage: 0 },
    { id: 6, name: 'Trà xanh bưởi', price: 45, src: tea3, styles: 'tea', discountPercentage: 0 },
    { id: 7, name: 'Trà xanh Đài Loan', price: 65, src: tea4, styles: 'tea', discountPercentage: 0 },
    { id: 8, name: 'Trà ô long', price: 45, src: tea5, styles: 'tea', discountPercentage: 0 },
    { id: 9, name: 'Trà ô long đào', price: 45, src: tea6, styles: 'tea', discountPercentage: 0 },
    { id: 10, name: 'Trà sữa chocolate', price: 45, src: milktea1, styles: 'milktea', discountPercentage: 0 },
    { id: 11, name: 'Trà sữa double tea', price: 55, src: milktea2, styles: 'milktea', discountPercentage: 0 },
    { id: 12, name: 'Trà sữa ngọc trai', price: 55, src: milktea4, styles: 'milktea', discountPercentage: 0 },
    { id: 13, name: 'Trà sữa kiwi', price: 65, src: milktea5, styles: 'milktea', discountPercentage: 0 },
    { id: 14, name: 'Trà sữa hương nho', price: 45, src: milktea6, styles: 'milktea', discountPercentage: 0 },
    { id: 15, name: 'Trà sữa khoai môn', price: 45, src: milktea3, styles: 'milktea', discountPercentage: 0 },
    { id: 16, name: 'Sinh tố dâu tây', price: 55, src: smoothie2, styles: 'smoothie', discountPercentage: 0 },
    { id: 17, name: 'Nước ép chanh dây', price: 47, src: juice2, styles: 'juice', discountPercentage: 0 },
    { id: 18, name: 'Nước ép chanh đá', price: 45, src: juice1, styles: 'juice', discountPercentage: 0 },
];

const ProductListWithoutSlider = ({ products, addProductToCart }) => {
    const addToCart = (product) => {
        addProductToCart(product);
    };
    const [showMore, setShowMore] = useState(false);
    const [showLess, setShowLess] = useState(false);
    const visibleProducts = showMore ? products : products.slice(0, 8);
    const handleShowMore = () => {
        setShowMore(true);
        setShowLess(true);
    };
    const handleShowLess = () => {
        setShowMore(false);
        setShowLess(false);
    };

    return (
        <div className={cx('product-list')}>
            <Grid container spacing={2}>
                {visibleProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card>
                            <CardContent>
                                <img src={product.src} alt={product.name} className={cx('img_products_dicount')} />
                                <Typography variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Giá: {product.price}.000 đ
                                </Typography>
                            </CardContent>
                            <Button variant="contained" onClick={() => addToCart(product)}>
                                Add to Cart
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {products.length > 8 && !showMore && (
                <div className={cx('button-container')}>
                    <Button className={cx('button_more')} variant="contained" onClick={handleShowMore}>
                        Xem thêm
                    </Button>
                </div>
            )}
            {showLess && (
                <div className={cx('button-container')}>
                    <Button variant="contained" onClick={handleShowLess}>
                        Ẩn bớt
                    </Button>
                </div>
            )}
        </div>
    );
};

const App = () => {
    const [currentProducts, setCurrentProducts] = useState(products);
    const [cartItems, setCartItems] = useState([]);

    const addProductToCart = (product) => {
        const existingProduct = cartItems.find((item) => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCart);
        } else {
            const updatedCart = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(updatedCart);
        }
    };

    const [traSuaChecked, setTraSuaChecked] = useState(false);
    const [traXanhChecked, setTraXanhChecked] = useState(false);
    const [sinhToChecked, setSinhToChecked] = useState(false);
    const [coffeeChecked, setCoffeeChecked] = useState(false);
    const [priceUnder50Checked, setPriceUnder50Checked] = useState(false);
    const [price50To100Checked, setPrice50To100Checked] = useState(false);
    const [priceOver100Checked, setPriceOver100Checked] = useState(false);
    const [sizeMChecked, setSizeMChecked] = useState(false);
    const [sizeLChecked, setSizeLChecked] = useState(false);
    const [sizeXLChecked, setSizeXLChecked] = useState(false);

    const handleTraSuaChange = () => {
        setTraSuaChecked(!traSuaChecked);
    };

    const handleTraXanhChange = () => {
        setTraXanhChecked(!traXanhChecked);
    };

    const handleSinhToChange = () => {
        setSinhToChecked(!sinhToChecked);
    };

    const handleCoffeeChange = () => {
        setCoffeeChecked(!coffeeChecked);
    };

    const handlePriceUnder50Change = () => {
        setPriceUnder50Checked(!priceUnder50Checked);
    };

    const handlePrice50To100Change = () => {
        setPrice50To100Checked(!price50To100Checked);
    };

    const handlePriceOver100Change = () => {
        setPriceOver100Checked(!priceOver100Checked);
    };

    const handleSizeMChange = () => {
        setSizeMChecked(!sizeMChecked);
    };

    const handleSizeLChange = () => {
        setSizeLChecked(!sizeLChecked);
    };

    const handleSizeXLChange = () => {
        setSizeXLChecked(!sizeXLChecked);
    };

    const handleFilter = () => {
        let filteredProducts = products;

        if (traSuaChecked) {
            filteredProducts = filteredProducts.filter((product) => product.styles === 'milktea');
        }

        if (traXanhChecked) {
            filteredProducts = filteredProducts.filter((product) => product.styles === 'tea');
        }

        if (sinhToChecked) {
            filteredProducts = filteredProducts.filter((product) => product.styles === 'smoothie');
        }
        if (coffeeChecked) {
            filteredProducts = filteredProducts.filter((product) => product.styles === 'coffee');
        }

        // Điều kiện lọc sản phẩm dựa trên giá
        if (priceUnder50Checked) {
            filteredProducts = filteredProducts.filter((product) => product.price < 50);
        }

        if (price50To100Checked) {
            filteredProducts = filteredProducts.filter((product) => product.price >= 50 && product.price <= 100);
        }

        if (priceOver100Checked) {
            filteredProducts = filteredProducts.filter((product) => product.price > 100);
        }

        setCurrentProducts(filteredProducts);
    };

    const [sortByPriceAsc, setSortByPriceAsc] = useState(false);

    const sortProductsByPrice = (products) => {
        if (sortByPriceAsc) {
            return products.slice().sort((a, b) => a.price - b.price);
        } else {
            return products.slice().sort((a, b) => b.price - a.price);
        }
    };
    const [showSortOptions, setShowSortOptions] = useState(false); // Ban đầu không hiển thị tùy chọn sắp xếp

    const handleDefaultSort = () => {
        setShowSortOptions(!showSortOptions); // Hiển thị/ẩn tùy chọn sắp xếp
    };

    // Mỗi khi có thay đổi trạng thái của checkbox, gọi hàm handleFilter để lọc sản phẩm
    useEffect(() => {
        handleFilter();
    }, [
        traSuaChecked,
        traXanhChecked,
        sinhToChecked,
        coffeeChecked,
        priceUnder50Checked,
        price50To100Checked,
        priceOver100Checked,
        sortByPriceAsc,
    ]);
    useEffect(() => {
        setCurrentProducts(sortProductsByPrice(currentProducts));
    }, [sortByPriceAsc]);

    return (
        <div>
            <Header cartItems={cartItems} setCartItems={setCartItems} />
            <div className="products_content">
                <h3>Hãy chọn theo cách của bạn</h3>
                <div className="content_grid">
                    <div className="content_bar">
                        {/* Nội dung của content_bar */}
                        <div className="content_category">
                            <span>Danh mục:</span>
                            <label>
                                <input type="checkbox" checked={traSuaChecked} onChange={handleTraSuaChange} />
                                Trà sữa
                            </label>
                            <label>
                                <input type="checkbox" checked={traXanhChecked} onChange={handleTraXanhChange} />
                                Trà xanh
                            </label>
                            <label>
                                <input type="checkbox" checked={sinhToChecked} onChange={handleSinhToChange} />
                                Sinh tố
                            </label>
                            <label>
                                <input type="checkbox" checked={coffeeChecked} onChange={handleCoffeeChange} />
                                Coffee
                            </label>
                        </div>
                        <div className="content_price">
                            <span>Giá:</span>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={priceUnder50Checked}
                                    onChange={handlePriceUnder50Change}
                                />
                                Dưới 50.000 vnđ
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={price50To100Checked}
                                    onChange={handlePrice50To100Change}
                                />
                                Từ 50.000 - 100.000 vnđ
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={priceOver100Checked}
                                    onChange={handlePriceOver100Change}
                                />
                                Trên 100.000 vnđ
                            </label>
                        </div>
                        <div className="content_size">
                            <span>Kích thước:</span>
                            <label>
                                <input type="checkbox" checked={sizeMChecked} onChange={handleSizeMChange} />
                                Size M
                            </label>
                            <label>
                                <input type="checkbox" checked={sizeLChecked} onChange={handleSizeLChange} />
                                Size L
                            </label>
                            <label>
                                <input type="checkbox" checked={sizeXLChecked} onChange={handleSizeXLChange} />
                                Size XL
                            </label>
                        </div>
                    </div>
                    <div className="product_list">
                        <div className="content_sort">
                            <span>Sắp xếp:</span>
                            <Button
                                variant="outlined"
                                className={cx({ sort_selected: showSortOptions })}
                                onClick={handleDefaultSort}
                            >
                                Mặc định {showSortOptions ? <span className={cx('arrow_down')}>&#9660;</span> : null}
                            </Button>
                            {/* Các tùy chọn khác sẽ hiển thị khi showSortOptions là true */}
                            {showSortOptions && (
                                <>
                                    <Button
                                        variant="outlined"
                                        className={cx({ sort_selected: sortByPriceAsc === true })}
                                        onClick={() => setSortByPriceAsc(true)}
                                    >
                                        Giá tăng dần
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className={cx({ sort_selected: sortByPriceAsc === false })}
                                        onClick={() => setSortByPriceAsc(false)}
                                    >
                                        Giá giảm dần
                                    </Button>
                                </>
                            )}
                        </div>
                        <ProductListWithoutSlider products={currentProducts} addProductToCart={addProductToCart} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
