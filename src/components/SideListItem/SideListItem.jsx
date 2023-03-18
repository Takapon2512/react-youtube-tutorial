import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'

export const SideListItem = ({id, src, title}) => {
    return (
        //動画ではpathnameをwatchにしているが、パスに余計なwatchが入るので削除
        <Link className={Style.item} to={{search: `?v=${id}`}}>
            <img src={src} alt={title} />
            <div className={Style.info}>
                <span>{title}</span>
            </div>
        </Link>
    )
}
