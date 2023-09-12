import React, { useState, useEffect } from 'react';
import className from 'classnames/bind';
import styles from './index.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartArrowDown,
    faGear,
    faGifts,
    faHouse,
    faTableCellsLarge,
    faUserGear,
    faUsers,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

const Sidebar = () => {
    const navigate = useNavigate();

    const handleAdminHome = () => {
        navigate('/admin');
    };
    const handleAdminProducts = () => {
        navigate('/admin/products');
    };
    return (
        <div className={cx('sidebar')}>
            <div className={cx('header_sidebar')}>
                <div className={cx('header_sidebar_container')}>
                    <FontAwesomeIcon icon={faUserGear} />
                    <span>Administrator</span>
                </div>
            </div>
            <div>
                <ul className={cx('menu-list')}>
                    <li className={cx('menu-item')} onClick={handleAdminHome}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon_menu_list')} /> <span>Dashboard</span>
                    </li>
                    <li className={cx('menu-item')} onClick={handleAdminProducts}>
                        <FontAwesomeIcon icon={faTableCellsLarge} className={cx('icon_menu_list')} />{' '}
                        <span>Products</span>
                    </li>
                    <li className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faUsers} className={cx('icon_menu_list')} /> <span>Users</span>
                    </li>
                    <li className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faCartArrowDown} className={cx('icon_menu_list')} /> <span>Orders</span>
                    </li>
                    <li className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faWarehouse} className={cx('icon_menu_list')} /> <span>Warehouse</span>
                    </li>
                    <li className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faGifts} className={cx('icon_menu_list')} /> <span>Events</span>
                    </li>
                </ul>
            </div>
            <div className={cx('footer_sidebar')}>
                <div>
                    <FontAwesomeIcon icon={faGear} className={cx('icon_menu_list')} /> <span>Settings</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
