import React from 'react'
import { FaHome, FaPhone, FaSearch } from 'react-icons/fa';
import HeaderNavRight from './HeaderNavRight';
import { params_HeaderTopNavRight } from '../../../data/params_HeaderTopNavRight';
import HeaderNavRightItem from './HeaderNavRightItem';

function HeaderTop() {
    return (
        <div className='header-top-nav'>
            <nav className='nav__menu-top'>
                <a href='' className='nav__menu-top-home'><FaHome /> Create by huyTD17</a>
                <HeaderNavRight>
                    {
                        params_HeaderTopNavRight.map((item, key) => (
                            <HeaderNavRightItem
                                key={`HeaderNavRight_${item.id}`}
                                icon={item.icon}
                                label={item.label}
                                link={item.link}
                                childs={item.childs}
                            />
                        ))
                    }
                </HeaderNavRight>
            </nav>
        </div>
    )
}

export default HeaderTop