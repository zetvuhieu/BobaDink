import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.scss';
import Sidebar from '~/components/Layout/Management/Sidebar';
import Dashboard from '~/components/Layout/Management/Dashboard';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Sidebar className={cx('home_sidebar')} />
            <div className={cx('home_content')}>
                <Dashboard />
            </div>
        </div>
    );
}

export default Home;
