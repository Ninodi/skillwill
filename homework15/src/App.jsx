import logo from './logo.svg';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';
import { useEffect, useRef } from 'react';

function App() {
  const [isDark, toggle] = useLocalStorage('isDark', true)
  const [width, height]= useWindowResize()
  const pageRef = useRef(null)
  
  
  //observe screen width and isDark state
  useEffect(() => {
    if(width <= 500){
      toggle((prevState) => prevState = false)
    }

    const pageElement = pageRef.current;
    if (pageElement) {
      pageElement.style.background = setBackgroundColor();
    }
  }, [width, isDark])


  //determine backgound color based on the isDark state
  const setBackgroundColor = () => {
    return isDark ? '#282c34' : '#F8F9F9';
  };

  //toggle isDark state on click
  const toggleTheme = () => {
    toggle((prevState) => !prevState)
  }


  return (
    <div className="App">
      <header className="App-header" ref={pageRef} >
        <img src={logo} className="App-logo" alt="logo" />
        <button 
          onClick={() => toggleTheme()}
        >Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
