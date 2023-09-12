import React, { useState, useEffect } from 'react';
import Header from '~/components/Layout/Header/';
import Footer from '~/components/Layout/Footer/';
import className from 'classnames/bind';
import styles from './user.module.scss';
import Slidershow from '~/components/Layout/Slidershow';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
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
import banner1 from '~/assets/img/banner/banner_1.jpg';
import banner2 from '~/assets/img/banner/banner_2.jpg';

const cx = className.bind(styles);

const ProductList = ({ addProductToCart }) => {
    const [products] = useState([
        { id: 101, name: 'Coffee', price: 20, src: milktea5, discountPercentage: 15 },
        { id: 102, name: 'Trà xanh', price: 20, src: tea1, discountPercentage: 15 },
        { id: 103, name: 'Nước ép cam', price: 20, src: milktea1, discountPercentage: 15 },
        { id: 104, name: 'Sinh tố', price: 20, src: juice3, discountPercentage: 15 },
        { id: 105, name: 'Trà matcha', price: 20, src: smoothie1, discountPercentage: 15 },
        { id: 106, name: 'Nước ép táo', price: 20, src: tea5, discountPercentage: 15 },
    ]);

    const addToCart = (product) => {
        addProductToCart(product);
    };

    const settings = {
        arrows: true,
        prevArrow: (
            <button type="button" className="slick-arrow slick-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-arrow slick-next">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchMove: true,
    };

    return (
        <div className={cx('product-list-slider')}>
            <Slider {...settings}>
                {products.map((product) => {
                    const discountPrice = product.price - (product.price * product.discountPercentage) / 100;

                    return (
                        <div key={product.id}>
                            <Card>
                                <CardContent>
                                    <img src={product.src} alt={product.name} className={cx('img_products_dicount')} />
                                    <Typography variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className={cx('original-price')}>
                                        Giá: {product.price} đ
                                    </Typography>
                                    {product.discountPercentage && (
                                        <Typography variant="body2" color="text.secondary">
                                            Giá khuyến mãi: {discountPrice} đ
                                        </Typography>
                                    )}
                                </CardContent>
                                <Button variant="contained" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </Button>
                            </Card>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
const products = [
    { id: 1, name: 'Nước ép dâu tây', price: 47, src: juice3, styles: 'juice', discountPercentage: 0 },
    { id: 2, name: 'Nước ép cam', price: 45, src: smoothie1, styles: 'juice', discountPercentage: 0 },
    { id: 3, name: 'Sinh tố xoài aloha', price: 45, src: smoothie1, styles: 'smoothie', discountPercentage: 0 },
    { id: 4, name: 'Trà xanh matcha', price: 45, src: tea2, styles: 'tea', discountPercentage: 0 },
    { id: 5, name: 'Trà xanh vị chanh', price: 42, src: tea1, styles: 'tea', discountPercentage: 0 },
    { id: 6, name: 'Trà xanh bưởi', price: 45, src: tea3, styles: 'tea', discountPercentage: 0 },
    { id: 7, name: 'Trà xanh Đài Loan', price: 45, src: tea4, styles: 'tea', discountPercentage: 0 },
    { id: 8, name: 'Trà ô long', price: 45, src: tea5, styles: 'tea', discountPercentage: 0 },
    { id: 9, name: 'Trà ô long đào', price: 45, src: tea6, styles: 'tea', discountPercentage: 0 },
    { id: 10, name: 'Trà sữa chocolate', price: 45, src: milktea1, styles: 'milktea', discountPercentage: 0 },
    { id: 11, name: 'Trà sữa double tea', price: 45, src: milktea2, styles: 'milktea', discountPercentage: 0 },
    { id: 12, name: 'Trà sữa ngọc trai', price: 45, src: milktea4, styles: 'milktea', discountPercentage: 0 },
    { id: 13, name: 'Trà sữa kiwi', price: 45, src: milktea5, styles: 'milktea', discountPercentage: 0 },
    { id: 14, name: 'Trà sữa hương nho', price: 45, src: milktea6, styles: 'milktea', discountPercentage: 0 },
    { id: 15, name: 'Trà sữa khoai môn', price: 45, src: milktea3, styles: 'milktea', discountPercentage: 0 },
    { id: 16, name: 'Sinh tố dâu tây', price: 45, src: smoothie2, styles: 'smoothie', discountPercentage: 0 },
    { id: 17, name: 'Nước ép chanh dây', price: 47, src: juice2, styles: 'juice', discountPercentage: 0 },
    { id: 18, name: 'Nước ép chanh đá', price: 47, src: juice1, styles: 'juice', discountPercentage: 0 },
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
    const [selectedFilter, setSelectedFilter] = useState('');
    const handleFilterClick = (filterId) => {
        setSelectedFilter(filterId);
        if (filterId === 'tea') {
            const filteredProducts = products.filter((product) => product.styles === 'tea');
            setCurrentProducts(filteredProducts);
        } else if (filterId === 'juice') {
            const filteredProducts = products.filter((product) => product.styles === 'juice');
            setCurrentProducts(filteredProducts);
        } else if (filterId === 'milktea') {
            const filteredProducts = products.filter((product) => product.styles === 'milktea');
            setCurrentProducts(filteredProducts);
        } else if (filterId === 'smoothie') {
            const filteredProducts = products.filter((product) => product.styles === 'smoothie');
            setCurrentProducts(filteredProducts);
        } else {
            setCurrentProducts(products);
        }
    };
    useEffect(() => {
        document.title = 'Boba Drink';
    }, []);

    return (
        <div>
            <div>
                <Header cartItems={cartItems} setCartItems={setCartItems} />
            </div>
            <div className={cx('content')}>
                <Slidershow />
                <div className={cx('products_list')}>
                    <div className={cx('products_list_child')}>
                        <div className={cx('products_discount')}>
                            <div className={cx('discount_icon_glass')}>
                                <FontAwesomeIcon icon={faMartiniGlass} className={cx('icon_glass')} />
                            </div>
                            <h2 className={cx('discount_heading')}>Đồ uống khuyến mãi</h2>
                        </div>
                        <ProductList addProductToCart={addProductToCart} />
                        <div className={cx('content_banner')}>
                            <img className={cx('content_banner_img')} src={banner1} />
                            <img className={cx('content_banner_img')} src={banner2} />
                        </div>
                        <div className={cx('content_products_favourite')}>
                            <div className={cx('products_discount')}>
                                <div className={cx('discount_icon_glass')}>
                                    <FontAwesomeIcon icon={faMartiniGlass} className={cx('icon_glass')} />
                                </div>
                                <h2 className={cx('discount_heading')}>Đồ uống ưa thích</h2>
                            </div>
                            <div className={cx('state__managerment_products')}>
                                <button
                                    className={cx('state_products', { selected: selectedFilter === '' })}
                                    onClick={() => handleFilterClick('')}
                                >
                                    TẤT CẢ
                                </button>
                                <button
                                    className={cx('state_products', { selected: selectedFilter === 'tea' })}
                                    onClick={() => handleFilterClick('tea')}
                                >
                                    TRÀ TRUYỀN THỐNG
                                </button>
                                <button
                                    className={cx('state_products', { selected: selectedFilter === 'juice' })}
                                    onClick={() => handleFilterClick('juice')}
                                >
                                    NƯỚC ÉP TRÁI CÂY
                                </button>
                                <button
                                    className={cx('state_products', { selected: selectedFilter === 'milktea' })}
                                    onClick={() => handleFilterClick('milktea')}
                                >
                                    TRÀ SỮA ĐÀI LOAN
                                </button>
                                <button
                                    className={cx('state_products', { selected: selectedFilter === 'smoothie' })}
                                    onClick={() => handleFilterClick('smoothie')}
                                >
                                    SINH TỐ
                                </button>
                            </div>
                            <ProductListWithoutSlider products={currentProducts} addProductToCart={addProductToCart} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
