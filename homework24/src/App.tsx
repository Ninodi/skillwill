import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddBook />} />
                <Route path="/book-list" element={<BookList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
