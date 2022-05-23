import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Filters from './Components/Filters/Filters';
import ProductsList from './Components/ProductsList/ProductsList';

const App = () => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<><Filters /> <ProductsList /> </>} />
    <Route path='/add' element={<h1>Add form</h1>} />
    <Route path='/edit' element={<h1>Edit form</h1>} />
    <Route path='/contacts' element={<h1>Contacts</h1>} />
  </Routes>
  <h1>Footer</h1>
  </BrowserRouter>
  );
};

export default App;