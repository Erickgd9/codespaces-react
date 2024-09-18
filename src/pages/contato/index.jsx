import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function Contato() {
  return (
    <div className='pagina-contato pagina'>
      < Cabecalho titulo='Contato' />
      
      <h1>Contato</h1>  
      
      <img src='/assets/images/179871.png' alt='https://cdn-icons-png.flaticon.com/512/179/179871.png' />
      
      <Link to = '/' >Pagina Inicial</Link>
    </div>    
  )
}