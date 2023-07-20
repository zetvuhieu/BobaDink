import slider1 from '~/assets/img/slider/slider_1.jpg';
import slider2 from '~/assets/img/slider/slider2.jpg';
import slider3 from '~/assets/img/slider/slider3.jpg';
import slider4 from '~/assets/img/slider/slider4.jpg';
import React from 'react';
import Slider from 'react-slick';
import className from 'classnames/bind';
import styles from './slidershow.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = className.bind(styles);

const Slideshow = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className={cx('slidershow')} style={{ maxWidth: '100vw' }}>
            <Slider {...settings}>
                <div>
                    <img className={cx('content_slider')} src={slider1} />
                </div>
                <div>
                    <img className={cx('content_slider')} src={slider2} />
                </div>
                <div>
                    <img className={cx('content_slider')} src={slider3} />
                </div>
                <div>
                    <img className={cx('content_slider')} src={slider4} />
                </div>
            </Slider>
        </div>
    );
};

export default Slideshow;
