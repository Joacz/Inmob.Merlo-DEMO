import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Contact, Details, Listado, PropiedadForm, CategoriaForm } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Contact />} path='/contacto' />
        <Route element={<Details />} path='/detalles/:id' />
        <Route element={<Listado />} path='/listado/:filter/:page/:search' />
        <Route element={<PropiedadForm />} path='/propiedad/crear' />
        <Route element={<CategoriaForm />} path='/categoria/crear' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
