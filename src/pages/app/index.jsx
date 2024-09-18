import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-app pagina">
      < Cabecalho titulo="Main Page" />

      <section className='secao' >
        <h1> Temas </h1>
        
        <ul>
          <li> 
            <Link to = '/contato' > Ir para Contato </Link>
          </li>

          <li> 
            <Link to = '/eventos' > Ir para Eventos </Link>
          </li>

          <li> 
            <Link to = '/varestado' > Ir para Variável de Estado </Link>
          </li>

          <li> 
            <Link to = '/componentes' > Ir para Componentes </Link>
          </li>

          <li> 
            <Link to = '/rendcond' > Ir para Renderização Condicional </Link>
          </li>

          <li>
            <Link to = '/efeitos' > Ir para Efeitos </Link>
          </li>

          <li>
            <Link to = '/chamadaapi' > Ir para Chamada API </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}