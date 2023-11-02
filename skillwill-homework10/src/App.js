import logo from './logo.svg';
import cvImage from './cvImage.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cvImage} className="App-logo" alt="logo" />
        <p>
          I want to become a React developer!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/nino-machaidze-20058a211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add me on LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
