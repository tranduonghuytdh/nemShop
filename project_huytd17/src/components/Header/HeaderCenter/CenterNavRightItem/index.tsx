import React from 'react'
import { params_HeaderMenuNavRight } from '../../../../data/params_HeaderMenuNavRight'

interface TypesChilds {
    id: number,
    label: string,
    link: string
}

function CenterNavRightItem({ link, label, childs }: { link: string, label: string, childs: Array<TypesChilds | null> }) {
    return (
        <li>
            <a href={link}>{label}</a>
            {
                childs && childs.length > 0 ? (
                    <ul className='nav-child'>
                        {
                            childs.map((item, key) => (
                                <li key={item?.id}><a href={item?.link}>{item?.label}</a></li>
                            ))
                        }
                    </ul>
                ) : null
            }
        </li>
    )
}

export default CenterNavRightItem