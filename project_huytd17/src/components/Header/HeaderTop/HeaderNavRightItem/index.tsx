import React from 'react'

interface TypesChilds {
    id: number,
    images: string,
    name: string,
    link: string,
    descrition: string
}

function HeaderNavRightItem({ customClass = 'has-child', link, icon, label, childs }: { customClass?: string, link: string, icon: React.ReactNode, label: string, childs: Array<TypesChilds | null> }) {
    return (
        <li className={customClass !== '' ? 'has-child' : ''}>
            <a href={link} className='nav__menu-top-icon'>{icon !== '' ? icon : ''}{label}</a>
            {
                childs && childs.length > 0 ? (
                    <div className='header__notify'>
                        <header className='header__notify-header'>
                            <h3>Notification</h3>
                        </header>
                        <ul className='header__notify-list'>
                            {
                                childs.map((item, key) => (
                                    <li key={item?.id}>
                                        <a href={item?.link} className='header__notify-link'>
                                            <img src={item?.images} className='header__notify-img' />
                                            <div className='header__notify-info'>
                                                <span className="header__notify-name">{item?.name}</span>
                                                <span className="header__notify-descrition">{item?.descrition}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <footer className='header__notify-footer'>
                            <a href='' className='header__notify-footer-btn'>Xem tất cả</a>
                        </footer>
                    </div>
                ) : null
            }
        </li>
    )
}

export default HeaderNavRightItem