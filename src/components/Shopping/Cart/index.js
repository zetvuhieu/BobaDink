import React from 'react';
import className from 'classnames/bind';
import styles from './cart.scss';

const cx = className.bind(styles);
function Cart() {
    return (
        <div className={cx('cart')}>
            <h2>Giỏ hàng</h2>
            <div>cart</div>
        </div>
    );
}

export default Cart;
