import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './header.scss';
import { faCartPlus, faChevronRight, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import logo from '~/assets/img/logo/logo.jpg';

const cx = className.bind(styles);

const Header = ({ cartItems, setCartItems }) => {
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen((prevOpen) => !prevOpen);
    };

    const Cart = () => {
        const removeFromCart = (itemId) => {
            const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
            setCartItems(updatedCartItems);
        };
        const updateQuantity = (itemId, newQuantity) => {
            if (newQuantity === 0) {
                removeFromCart(itemId);
            } else {
                setCartItems(
                    cartItems.map((item) => {
                        if (item.id === itemId) {
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    }),
                );
            }
        };
        const totalPrice = cartItems.reduce(
            (total, item) => total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
            0,
        );
        const handleCheckout = () => {
            navigate('/checkout');
        };
        return (
            <div className={cx('cart_content')}>
                <div className={cx('cart_content_wrapper')}>
                    <h2>Cart</h2>
                    <ul className={cx('cart_items')}>
                        {cartItems.map((item) => (
                            <li key={item.id} className={cx('cart_item')}>
                                <div className={cx('item_info')}>
                                    <img className={cx('item_img')} src={item.src} alt={item.name} />
                                    <div className={cx('properties_products')}>
                                        <strong className={cx('item_name')}>{item.name}</strong>
                                        <span className={cx('item_price')}>{item.price}.000 vnđ</span>
                                        <div className={cx('action_update')}>
                                            <button
                                                className={cx('update_quantity')}
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span className={cx('item_quantity')}>{item.quantity}</span>
                                            <button
                                                className={cx('update_quantity')}
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('item_actions')}>
                                    <a onClick={() => removeFromCart(item.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {cartItems.length > 0 ? (
                            <>
                                <div className={cx('total_price_container')}>
                                    <h3 className={cx('total_price_left')}>Thành tiền:</h3>
                                    <h3 className={cx('total_price_right')}>{totalPrice}.000 vnđ</h3>
                                </div>
                                <div className={cx('checkout_action')}>
                                    <button className={cx('btn_checkout_action')} onClick={handleCheckout}>
                                        Thanh toán
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p>Không có đơn hàng.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const [traditionalTea] = useState([
        { id: 1, name: 'Hồng trà' },
        { id: 2, name: 'Trà ô long' },
        { id: 3, name: 'Trà hoa nhài' },
        { id: 4, name: 'Trà xanh' },
    ]);
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    };
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    useEffect(() => {
        // Xác định trang hiện tại và cập nhật trạng thái activeMenuItem
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            setActiveMenuItem('Trang chủ');
        } else if (currentPath === '/products') {
            setActiveMenuItem('Sản phẩm');
        }
    }, []);

    const handleClickMenuItem = (itemName, path) => {
        setActiveMenuItem(itemName);
        navigate(path);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const handleClickSignUp = () => {
        navigate('/sign_up');
    };

    const handleClickSignIn = () => {
        // Implement your sign-in logic here.
        // For this example, we'll assume the login is successful.
        setIsLoggedIn(true);

        // Set the avatar URL after successful login
        setAvatarUrl('https://example.com/avatar.jpg');
    };

    const handleClickSignOut = () => {
        // Implement your sign-out logic here.
        setIsLoggedIn(false);
        setAvatarUrl(null); // Reset avatar URL on logout
    };

    // Function to handle login button click and navigate to /login
    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className={cx('header')}>
            <div className={cx('header_top')}>
                <div className={cx('header_row')}>
                    <div className={cx('header_top_left')}>
                        <div>
                            <span className={cx('header_info_address')}>
                                Địa chỉ: Tầng 6 Ladeco, 266 Đội Cấn, Ba Đình,Hà Nội,
                            </span>
                        </div>
                        <span className={cx('header_info_line')}>|</span>
                        <div className={cx('header_info_address')}>
                            <span>Hotline: </span>
                            <a className={cx('header_info_address')} href="tel:19006750">
                                1900 6750
                            </a>
                        </div>
                    </div>
                    <div className={cx('header_top_right')}>
                        <div className={cx('header_search')}>
                            <input className={cx('search_input')} type="text" placeholder="Tìm kiếm" />
                            <FontAwesomeIcon className={cx('icon_search')} icon={faSearch} />
                        </div>
                        <div className={cx('header_account')}>
                            {isLoggedIn ? (
                                // If the user is logged in, show the avatar button.
                                <button onClick={handleClickSignOut} className={cx('header_btn')}>
                                    <img src={avatarUrl} alt="Avatar" className={cx('avatar')} />
                                </button>
                            ) : (
                                // If the user is not logged in, show the sign-up and sign-in buttons.
                                <>
                                    <button onClick={handleClickSignUp} className={cx('header_btn')}>
                                        Đăng ký
                                    </button>
                                    {/* Use the handleLoginClick function to navigate to the login page */}
                                    <button onClick={handleLoginClick} className={cx('header_btn')}>
                                        Đăng nhập
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('header_bottom')}>
                <div className={cx('header_row')}>
                    <div className={cx('header_logo')}>
                        <img onClick={handleClickHome} src={logo} alt="Logo" />
                    </div>
                    <div className={cx('header_menu')}>
                        <ul className={cx('menu_ul')}>
                            <li
                                onClick={() => handleClickMenuItem('Trang chủ', '/')}
                                className={cx('menu_item', {
                                    active: activeMenuItem === 'Trang chủ', // Nếu trạng thái bằng 'Trang chủ', thêm class 'active'
                                })}
                            >
                                Trang chủ
                            </li>
                            <li
                                onClick={() => {
                                    handleClickMenuItem('Sản phẩm');
                                    navigate('/products');
                                }}
                                className={cx('menu_item_products', {
                                    active: activeMenuItem === 'Sản phẩm', // Nếu trạng thái bằng 'Sản phẩm', thêm class 'active'
                                })}
                            >
                                <a>
                                    Sản phẩm
                                    <FontAwesomeIcon className={cx('icon_chevron')} icon={faChevronRight} />
                                </a>
                                <div className={cx('product_menu_content')}>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={cx('menu_list_product')}>
                                        <span className={cx('menu_list_product_heading')}>TRÀ TRUYỀN THỐNG</span>
                                        <ul className={cx('menu_list_product_ul')}>
                                            {traditionalTea.map((product) => (
                                                <li className={cx('menu_list_product_item')} key={product.id}>
                                                    {product.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li
                                onClick={() => {
                                    handleClickMenuItem('Tin tức');
                                    navigate('/');
                                }}
                                className={cx('menu_item', {
                                    active: activeMenuItem === 'Tin tức', // Nếu trạng thái bằng 'Tin tức', thêm class 'active'
                                })}
                            >
                                Tin tức
                                <FontAwesomeIcon className={cx('icon_chevron')} icon={faChevronRight} />
                            </li>
                            <li
                                onClick={() => {
                                    handleClickMenuItem('Giới thiệu');
                                    navigate('/about_us');
                                }}
                                className={cx('menu_item', {
                                    active: activeMenuItem === 'Giới thiệu',
                                })}
                            >
                                Giới thiệu
                            </li>
                            <li
                                onClick={() => handleClickMenuItem('Liên hệ')}
                                className={cx('menu_item', {
                                    active: activeMenuItem === 'Liên hệ',
                                })}
                            >
                                Liên hệ
                            </li>
                        </ul>
                    </div>
                    <div className={cx('header_cart')}>
                        <FontAwesomeIcon className={cx('icon_cart')} icon={faCartPlus} onClick={toggleCart} />
                    </div>
                </div>
            </div>
            {isCartOpen && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
        </div>
    );
};

export default Header;
