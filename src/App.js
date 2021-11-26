import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/main/main.component';
import CONTENT from './components/assets/conent';
import {Container, Row, Col} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/about/about.component';
//<i class="fas fa-podcast"></i>
//https://www.canva.com/create/youtube-thumbnails/

//npm i react-h5-audio-player
// react bootstrap npm i bootstrap
// npm i react-bootstrap
function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Route exact path="/" render={props =>(
          <Main podcasts={CONTENT}/>
        )}/>
        <Route path="/about" component={About} />
     </div>
    </div>
  </Router>
  );
}

export default App;
