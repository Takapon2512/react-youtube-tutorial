import React from 'react'
import Style from './VideoGridItem.module.scss'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

export const VideoGridItem = ({id, src, title}) => {
  //パスがsearch以下になっている場合は、パス「search」の書き換え作業を行う
  const location = useLocation()
  const searchPath = location.pathname

  return (
    <Link to={searchPath === '/search' ? `../watch?v=${id}`: {path: 'watch', search: `v=${id}`}} className={Style.item}>
        <div>
            <img src={src} alt={title} />
            <span>{title}</span>
        </div>
    </Link>
  )
}

//{path: 'watch', search: `?v=${id}`}