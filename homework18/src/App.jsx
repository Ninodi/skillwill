import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Layouts from "./Layouts";
import UpdatePage from './pages/UpdatePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />} />
        <Route index element={<MainPage />}/>
        <Route path='update/:todoId' element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App