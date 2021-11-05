import React from 'react'
import './podcast.styles.scss'
//https://stackoverflow.com/questions/56602005/play-audio-with-react
//https://www.youtube.com/watch?v=MpQ1sVku-D0
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
