import './index.scss';

import { useState } from 'react';
import Cabecalho from '../../components/cabecalho/index.jsx';
import CartaoFilme from '../../components/cartaoFilme/index.jsx';

export default function RenderizacaoCondicional() {

    const [ exibirBiscoitoSorte, setExibirBiscoitoSorte ] = useState(false);

    const [ nomeFilme, setNomeFilme ] = useState('');
    const [ classificacaoFilme, setClassificacaoFilme ] = useState('');
    const [ urlFilme, setUrlFilme ] = useState('');
    const [ estreiaFilme, setEstreiaFilme ] = useState('');
    const [ destaqueFilme, setDestaqueFilme ] = useState(false);
    const [ listaFilmes, setListaFimes ] = useState([]);

    function adicionarFilme() {

        if ( nomeFilme == '' || classificacaoFilme == '' || urlFilme == '' ) {
          alert('Preencha todos os campos');

        }
        else {

          let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme,
            estreia: estreiaFilme,
            destaque: destaqueFilme,
          }
          

          setListaFimes([...listaFilmes, novoFilme]);
          setNomeFilme('');
          setClassificacaoFilme('');
          setUrlFilme('');
          
        }
      }

    function abrirFecharBiscoitoSorte() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte);
    }

    return(
        <div className="pagina-rende-cond pagina">
            < Cabecalho titulo='Renderização Condicional' />

            <div className="secao filmes">
              <h1> Catálogo de Filmes </h1>

              <div className="entradas">
                <input type="text" placeholder='Nome do Filme'  value={nomeFilme} onChange={ (e) => setNomeFilme(e.target.value) } />

                <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={ (e) => setClassificacaoFilme(e.target.value) } />

                <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={ (e) => setUrlFilme(e.target.value) } />

                <input type="text" placeholder='Estreia do Filme' value={estreiaFilme} onChange={ (e) => setEstreiaFilme(e.target.value) } />

                <div>
                  <input type='checkbox' value={destaqueFilme} onChange={ (e) => setDestaqueFilme(e.target.checked) } />
                  <label> Destaque </label>
                </div>

                <button onClick={ adicionarFilme } > Adicionar </button>
              </div>

              <div className="lista">
                { listaFilmes.map( item => 
                  < CartaoFilme item={item} />
                ) }
              </div>
            </div>

            <div className="secao">
                <h1> Biscoito da Sorte </h1>

                <button onClick={abrirFecharBiscoitoSorte} > 
                    { exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir' }    
                </button>

                { exibirBiscoitoSorte == true && 
                    <p className='msg-biscoito' >
                        "Sempre haverá pessoas melhores e piores em abilidades diferente. Avance e ajude."
                    </p>
                }
            </div>
        </div>
    )
}