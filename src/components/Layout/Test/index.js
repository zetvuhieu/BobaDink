import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './test.module.scss';
import { faCartPlus, faChevronRight, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import logo from '~/assets/img/logo/logo.jpg';
import Cart from '~/components/Shopping/Cart';

const cx = className.bind(styles);

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const toggleCart = () => {
        setShowCart((prevOpen) => !prevOpen);
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

    const handleClickSignUp = () => {
        navigate('/sign_up');
    };

    // Function to handle login button click and navigate to /login
    const handleLoginClick = () => {
        navigate('/login');
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // Define user state

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser); // Set user state if user exists in local storage
            setIsLoggedIn(true);
        }
    }, []);

    const handleClickSignOutUser = () => {
        localStorage.removeItem('user');
        setUser(null); // Clear the user state
        setIsLoggedIn(false);
    };
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleClickUser = () => {
        setShowLogoutButton(true);
        setIsActive(!isActive); // Đảo ngược giá trị của isActive khi click
    };

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const userButton = document.querySelector(`.${cx('header_btn')}`);
            const btnUserAction = document.querySelector(`.${cx('btn_user_action')}`);

            if (showLogoutButton && btnUserAction && !btnUserAction.contains(event.target)) {
                // Nếu showLogoutButton đang bật và không click vào nội dung của btn_user_action
                if (!userButton.contains(event.target)) {
                    // Kiểm tra xem không click vào nút userButton
                    setShowLogoutButton(false);
                    setIsActive(false); // Loại bỏ lớp "selected" khi click bên ngoài
                }
            }
        };

        if (showLogoutButton) {
            window.addEventListener('click', handleDocumentClick);
        } else {
            window.removeEventListener('click', handleDocumentClick);
        }

        return () => {
            window.removeEventListener('click', handleDocumentClick);
        };
    }, [showLogoutButton]);

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
                                <div className={cx('btn_user')}>
                                    <button
                                        onClick={handleClickUser}
                                        className={cx('header_btn', { selected: isActive })}
                                    >
                                        <p>{user.firstName + ' ' + user.lastName}</p>
                                    </button>

                                    {showLogoutButton && (
                                        <div className={cx('btn_user_action')}>
                                            <ul className={cx('btn_user_action_list')}>
                                                <li className={cx('item_action_user')}>
                                                    <span>Trang cá nhân</span>
                                                </li>
                                                <li className={cx('item_action_user')}>
                                                    <span>Lịch sử mua hàng</span>
                                                </li>
                                                <li className={cx('item_action_user')} onClick={handleClickSignOutUser}>
                                                    <span>Đăng xuất</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
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
            {showCart && (
                <div className={cx('cart-container')}>
                    <Cart />
                </div>
            )}
        </div>
    );
};

export default Header;
