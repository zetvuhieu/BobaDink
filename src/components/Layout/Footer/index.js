import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './footer.modules.scss';
import { Grid } from '@mui/material';
import { faEnvelope, faHouse, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer_top')}>
                <div className={cx('footer_row')}>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <div className={cx('footer_column')}>
                                <FontAwesomeIcon icon={faHouse} className={cx('footer_column_icon')} />
                                <p>
                                    <strong className={cx('footer_column_title')}>Giờ mở cửa</strong>
                                </p>
                                <div>
                                    <span className={cx('highlight')}>Thứ 2-6:</span>
                                    <span className={cx('highlight-text')}>8h00 am - 22h00 pm</span>
                                </div>
                                <div>
                                    <span className={cx('highlight')}>Thứ 7-CN: </span>
                                    <span className={cx('highlight-text')}>9h00 am - 21h00 pm</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={cx('footer_column')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('footer_column_icon')} />
                                <p>
                                    <strong className={cx('footer_column_title')}>Thông tin liên hệ</strong>
                                </p>
                                <div>
                                    <span className={cx('footer_info_address')}>
                                        Địa chỉ: Tầng 6 Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội,
                                    </span>
                                </div>
                                <div>
                                    <span className={cx('footer_info_address')}>
                                        Điện thoại:{' '}
                                        <a href="tel:19006750" className={cx('footer_info_address')}>
                                            1900 6750
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={cx('footer_column')}>
                                <FontAwesomeIcon icon={faShareNodes} className={cx('footer_column_icon')} />
                                <p>
                                    <strong className={cx('footer_column_title')}>Kết nối với chúng tôi</strong>
                                </p>
                                <div className={cx('footer_column_wrapper')}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} sm={3}>
                                            <div className={cx('footer_column_social')}>
                                                <FontAwesomeIcon icon={faGooglePlus} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <div className={cx('footer_column_social')}>
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <div className={cx('footer_column_social')}>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <div className={cx('footer_column_social')}>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Footer;
