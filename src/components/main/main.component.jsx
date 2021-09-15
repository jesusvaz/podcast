import React from 'react'
import Template from '../template/template.component'
import '../main/main.styles.scss'

const Main = ({podcasts}) => {
    //console.log('podcasts',JSON.stringify(podcasts))
    return (
        <div>
            <Template podcasts={podcasts}/>
        </div>
    )
}

export default Main
