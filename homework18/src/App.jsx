import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Layouts from "./Layouts";
import UpdatePage from './pages/UpdatePage';
import Header from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';


function App() {
  return (
    <div>
      <LanguageProvider>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layouts />} />
            <Route index element={<MainPage />}/>
            <Route path='update/:todoId' element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  )
}

export default App