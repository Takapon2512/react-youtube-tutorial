import React, { useContext } from 'react'
import { Store } from '../../store/index'
import { VideoPlay } from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import ReactLinkify from 'react-linkify'

export const VideoDetail = () => {
    const {globalState} = useContext(Store)

    return globalState.selected && globalState.selected.id ? (
        <div className={Style.wrap}>
            <VideoPlay id={globalState.selected.id} />
            <p>{globalState.selected.snippet.title}</p>
            <hr />
            <ReactLinkify>
                <pre>{globalState.selected.snippet.description}</pre>
            </ReactLinkify>
        </div>
    ) : (
        <span>no data</span>
    )
}
