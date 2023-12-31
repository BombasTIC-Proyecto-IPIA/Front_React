import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/LogIn';
import VistaPacientes from './components/VistaPacientes';
// import ListaPacientes from './components/ListaPacientes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VistaDoctores from './components/VistaDoctores';
import PreDiagnostico from './components/PreDiagnostico';
import RealizarDiagnostico from './components/RealizarDiagnostico';

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor" element={<VistaDoctores />} />
          <Route path="/paciente" element={<VistaPacientes />} />
          <Route path="/pre-diagnostico/:dni" element={<PreDiagnostico />} />
          <Route path="/diagnostico" element={<RealizarDiagnostico />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
