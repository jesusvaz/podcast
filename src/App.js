
import Main from './components/main/main.component';
import CONTENT from './components/assets/conent';
//<i class="fas fa-podcast"></i>
//https://www.canva.com/create/youtube-thumbnails/
function App() {
  return (
    <div className="App">
      <Main podcasts={CONTENT}/>
    </div>
  );
}

export default App;
