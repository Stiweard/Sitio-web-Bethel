import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
// Componentes
import Inicio from './container/inicio/Inicio';

export default function App() {
  return (
    <div>
      <HelmetProvider>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Inicio/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </div>
  )
}
