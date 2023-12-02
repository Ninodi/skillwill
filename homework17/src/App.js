import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import FactsPage from './pages/FactsPage';
import Layouts from './Layouts';
import MainPage from './pages/MainPage';

const facts = [
  {id: 1, fact: 'Johan has a strange and compulsive habit of framing people for triple-murder with the use of seemingly innocent Whiskey Bonbons laced with muscle relaxant. He used them to murder the corrupt superiors of Dr Kenzo Tenma, as well as a guard outside the room of Adolf Junkers, and the corrupt employers of Jan Suk. The design of the sweets was believed to be based on “Werther’s Originals” a British hard candy.'},
  {id: 2, fact: 'Johan has a reputation for leaving things up in smoke. Whether it be the Turkish quarter of a German city, or a library being opened by Hans Georg Schuwald. Johan uses concoctions of oil and other combustibles to leave with a bang rather than a fizzle.'},
  {id: 3, fact: 'A brainwashing children’s book penned by Franz Bonaparte, this book holds the basis of most of Johan’s psychology and pathos, as well as his name. This book has tremendous power over Johan, and carries the message that a creature is nothing without its identity, and the concept of names is used to metaphorically represent identity itself. And also, disputably, that monsters can have no true identity.'},
  {id: 4, fact: 'Johan once imitated his sister, Anna, in order to manipulate Jan Suk. He achieved this with little more than a dress and a wig.'}
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path='/:param' element={<FactsPage facts={facts} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
