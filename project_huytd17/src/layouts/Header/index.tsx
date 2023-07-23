import React from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderCenter from '../../components/Header/HeaderCenter'

function Header() {
    return (
        <div className='wrapper'>
            <div className="header-top">
                <HeaderTop />
            </div>
            <div className="header-center">
                <HeaderCenter />
            </div>
        </div >

    )
}

export default Header