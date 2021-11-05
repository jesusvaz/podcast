
import React from 'react';
import Podcast from '../podcast/podcast.component';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../template/template.styles.scss';
import mp3one from '../assets/podcast/mp3one.mp3';
import {Container, Row, Col} from 'react-bootstrap';

//https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

const Template = ({ podcasts }) => {
    console.log('podcasts', JSON.stringify(podcasts.data[0].title))
    //console.log('podcast',JSON.stringify(podcasts))
    console.log('data:', podcasts.data)

    let listOfPodcast = podcasts.data.map(pod =>
        <>
          
            <Podcast
                key={pod.postcast}
                podcast={pod}
            />
          
             
                        <AudioPlayer
                        
                            autoPlay
                            src={mp3one}
                            onPlay={e => console.log("onPlay")}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            showJumpControls={false}
                        // other props here
                        />
                    
        </>
    )

    return (

        <div>

            <div className="container">

                <nav>
                    <i class="fas fa-podcast fa-5x"></i>
                    <h1>Tormenta Latina</h1></nav>
                <main>

                    {
                        listOfPodcast
                    }

                </main>
                <div key='s1' className="sidebar">

                </div>
                <div key='c1' className="content1">Podcast nuevo cada LOunes</div>
                <div key='c2' className="content2">Contcactanos</div>
                <div key='c3' className="content3">Apoyanos <i class="fab fa-paypal"></i>Paypal</div>
                <footer><h6> &copy;copyright Podcasast LLC  <em id="date">{new Date().getFullYear()}</em> </h6></footer>
            </div>

        </div>

    )
}

export default Template
