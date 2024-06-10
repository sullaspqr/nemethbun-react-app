import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Szerkeszd át a <code>src/App.js</code> fájlt és mentsd el, hogy újratöltődjön!
        </p>
        <a
          className="App-link"
          href="https://legacy.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tanulj React-ot!
        </a>
      </header>
    </div>
  );
}

export default App;
