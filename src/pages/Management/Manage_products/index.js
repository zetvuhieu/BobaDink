import React from 'react';
import classNames from 'classnames/bind';
import Sidebar from '~/components/Layout/Management/Sidebar';
import Products from '~/components/Layout/Management/Products';
import styles from './managerproducts.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('home')}>
            <Sidebar className={cx('home_sidebar')} />
            <div className={cx('home_content')}>
                <Products />
            </div>
        </div>
    );
}

export default App;
