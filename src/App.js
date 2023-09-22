import './App.css';
import { NavBar } from './components/navBar';
import { Banner } from './components/banner';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Banner />
      < About />
      < Projects />
      < Footer />
    </div>
  );
}

export default App;
