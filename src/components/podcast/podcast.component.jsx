import React from 'react'
import './podcast.styles.scss'

const Podcast = ({podcast}) => {
    return (
        <div>
            <>
            <a href={podcast.url} target="blank">
                <img src={podcast.thumbnail} alt="" className="podcast"/>
            </a>
     
            <h1 className="title">{podcast.title}</h1>
            </>
        </div>
    )
}

export default Podcast
