import { Route, Routes, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/about">Aboutme</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="home" element={<Home />}/>
              <Route path="about" element={<About />} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
