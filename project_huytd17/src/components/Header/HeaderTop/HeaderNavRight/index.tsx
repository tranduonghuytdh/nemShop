import React from 'react'

function HeaderNavRight({ children }: { children: React.ReactNode }) {
    return (
        <ul className='nav__menu-top-item'>
            {children}
        </ul>
    )
}

export default HeaderNavRight