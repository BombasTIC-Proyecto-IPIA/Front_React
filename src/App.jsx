import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LogIn';
import ListaPacientes from './components/ListaPacientes';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/pacientes" element={<ListaPacientes/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
