
import Main from './components/main/main.component';
import CONTENT from './components/assets/conent';
import {Container, Row, Col} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
//<i class="fas fa-podcast"></i>
//https://www.canva.com/create/youtube-thumbnails/

//npm i react-h5-audio-player
// react bootstrap npm i bootstrap
// npm i react-bootstrap
function App() {
  return (
    <div className="App">
      <Main podcasts={CONTENT}/>
    </div>
  );
}

export default App;
