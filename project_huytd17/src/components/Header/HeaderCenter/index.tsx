import React from 'react'
import { params_HeaderMenuNavRight } from '../../../data/params_HeaderMenuNavRight'
import CenterNavRightItem from './CenterNavRightItem'
import CenterNavRight from './CenterNavRight'

function HeaderCenter() {
    return (
        <div className='header-center-nav'>
            <nav className='nav__menu-center'>
                <a href='' className='logo'>
                    <img src='./images/logo.webp' alt='Nem' />
                </a>
                <CenterNavRight>
                    {
                        params_HeaderMenuNavRight.map((item, key) => (
                            <CenterNavRightItem
                                key={`CenterNavRightItem_${item.id}`}
                                label={item.label}
                                link={item.link}
                                childs={item.childs}
                            />
                        ))
                    }
                </CenterNavRight>
            </nav>
        </div>
    )
}

export default HeaderCenter