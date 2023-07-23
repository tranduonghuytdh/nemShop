import React from 'react'

function CenterNavRight({ children }: { children: React.ReactNode }) {
    return (
        <ul className='nav__menu-center-item'>
            {children}
        </ul>
    )
}

export default CenterNavRight