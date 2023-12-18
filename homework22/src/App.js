import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Layouts';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';
import FavoriteBooks from './pages/FavoriteBooks';
import EditBook from './pages/EditBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}/>
        <Route index element={<AddBook />}/>
        <Route path='/books' element={<BookList />}/>
        <Route path='/books/favorites' element={<FavoriteBooks />}/>
        <Route path='/books/:bookId' element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
