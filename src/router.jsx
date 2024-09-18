import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app/index';
import Contato from './pages/contato/index';
import NotFound from './pages/not_found/index';
import Eventos from './pages/eventos/index';
import VarEstado from './pages/varEstado/index';
import Comps from './pages/comps/index.jsx';
import RenderizacaoCondicional from './pages/rendeComd/index.jsx';
import Efeitos from './pages/efeitos/index.jsx';

export default function Navegacao() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <App /> } />
        <Route path = '/contato' element = { <Contato /> } /> 
        <Route path = '/eventos' element = { <Eventos /> } /> 
        <Route path = '/varestado' element = { <VarEstado /> } /> 
        <Route path = '/componentes' element = { <Comps /> } /> 
        <Route path = '/rendcond' element = { <RenderizacaoCondicional /> } /> 
        <Route path = '/efeitos' element={ < Efeitos /> } />

        <Route path = '*' element = { <NotFound /> } />
      </Routes>    
    </BrowserRouter>
  )
}