import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Createbooks from './pages/Createbooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/books/create' element={<Createbooks/>} />
    <Route path='/books/details/:id' element={<ShowBook/>} />
    <Route path='/books/edit/:id' element={<EditBook/>} />
    <Route path='/books/delete/:id' element={<DeleteBook/>} />
   </Routes>
  )
}

export default App
App