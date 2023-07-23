import React from 'react'
import { FaHome, FaPhone, FaSearch } from 'react-icons/fa';

function Save() {
    return (
        <div>
            <header>
                <div className='wrapper'>
                    <div className="header-top">
                        <div className='header-top-nav'>
                            <nav className='nav__menu-top'>
                                <a href='' className='nav__menu-top-home'><FaHome /> Create by huyTD17</a>
                                <ul className='nav__menu-top-item'>
                                    <li>
                                        <a href='' className='nav__menu-top-icon'>Thông báo</a>
                                        <div className='header__notify'>
                                            <header className='header__notify-header'>
                                                <h3>Notification</h3>
                                            </header>
                                            <ul className='header__notify-list'>
                                                <li>
                                                    <a href='' className='header__notify-link'>
                                                        <img src='./images/logo197.jpg' className='header__notify-img' />
                                                        <div className='header__notify-info'>
                                                            <span className="header__notify-name">Đầm thiết kế dáng chữ A qua gối, cổ vuông phối nơ bản to,kết hợp họa tiết hoa</span>
                                                            <span className="header__notify-descrition">Cao1m60, nặng 50kg, số đo 84 - 64 - 90 mặc sản phẩm size 2</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='' className='header__notify-link'>
                                                        <img src='./images/logo197.jpg' className='header__notify-img' />
                                                        <div className='header__notify-info'>
                                                            <span className="header__notify-name">Đầm thiết kế dáng chữ A qua gối, cổ vuông phối nơ bản to,kết hợp họa tiết hoa</span>
                                                            <span className="header__notify-descrition">Cao1m60, nặng 50kg, số đo 84 - 64 - 90 mặc sản phẩm size 2</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <footer className='header__notify-footer'>
                                                <a href='' className='header__notify-footer-btn'>Xem tất cả</a>
                                            </footer>
                                        </div>
                                    </li>
                                    <li><a href='' className='nav__menu-top-icon'><FaPhone /> Contact : 0586223762</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-center">
                        <div className='header-center-nav'>
                            <nav className='nav__menu-center'>
                                <a href='' className='logo'>
                                    <img src='./images/logo.webp' alt='Nem' />
                                </a>
                                <ul className='nav__menu-center-item'>
                                    <li><a href=''>Home</a></li>
                                    <li className='has-child'>
                                        <a href=''>Blog</a>
                                        <ul className='nav-child'>
                                            <li><a href=''>Blog_1</a></li>
                                            <li>
                                                <a href=''>Blog_2</a>
                                                <ul className='nav-child'>
                                                    <li><a href=''>Blog_2.1</a></li>
                                                    <li><a href=''>Blog_2.2</a></li>
                                                    <li><a href=''>Blog_2.3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href=''>Blog_3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href=''>Product</a></li>
                                    <li><a href=''>Category</a></li>
                                    <li><a href=''>Login</a></li>
                                    <li><a href=''>Cart</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
            <main>Main</main>
            <footer>Footer</footer>
        </div>
    )
}

export default Save