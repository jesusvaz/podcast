
import React from 'react';
import Podcast from '../podcast/podcast.component';
import '../template/template.styles.scss';

const Template = ({podcasts}) => { 
    console.log('podcasts',JSON.stringify(podcasts.data[0].title))
    //console.log('podcast',JSON.stringify(podcasts))
    console.log('data:',podcasts.data)

    let listOfPodcast = podcasts.data.map(pod => <Podcast key={pod.postcast}  podcast={pod} />)
  
return (
      
            <div>
                    
                <div className="container">

                <nav>
                    <i class="fas fa-podcast fa-5x"></i>
                    <h1>Podcast:Republicano Latino </h1></nav>
                <main>
                
                {
                    listOfPodcast
                }

                </main>
                <div key ='s1' className="sidebar">
                
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
