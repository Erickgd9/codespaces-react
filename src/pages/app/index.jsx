import './index.scss';

import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <div className='pagina-contato pagina'>
      
      <h1>Contato</h1>  
      
      <img src='/assets/images/179871.png' alt='Regarregue' />
      
      <Link to = '/' >Pagina Inicial</Link>
    </div>    
  )
}