import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho/index.jsx';
import Contador from '../../components/contador/index.jsx';
import ItemMeta from '../../components/itemMeta/index.jsx';
import ItemPlano from '../../components/itemPlano/index.jsx';
import CartaoFilme from '../../components/cartaoFilme/index.jsx';

export default function Comps() {

    const [ plano, setPlano ] = useState('');
    const [ situacao, setSituacao ] = useState('');
    const [ cor, setCor ] = useState('');
    const [ listaPlanos, setListaPlanos ] = useState([]);

    const [ novaMeta, setNovaMeta ] = useState('');
    const [ listaMetas, setListaMetas ] = useState([]);
    const [ editando, setEditando ] = useState(-1);
    const [ frufru, setFrufru ] = useState('Adicionar');

    const [ nomeFilme, setNomeFilme ] = useState('');
    const [ classificacaoFilme, setClassificacaoFilme ] = useState('');
    const [ urlFilme, setUrlFilme ] = useState('');
    const [ listaFilmes, setListaFimes ] = useState([]);

    function adicionarMeta() {

        if ( novaMeta != '' ) {
    
          if ( editando == -1 ) {
            setListaMetas([...listaMetas, novaMeta]);
            setNovaMeta('');  
          }
          else {
            listaMetas[editando] = novaMeta;
            setListaMetas([...listaMetas]);
            setNovaMeta('');
            setEditando(-1);
            setFrufru('Adicionar');
            
          }
          
        }
      }
    function teclaApertada(e) {
        if ( e.key == 'Enter' ) {
          adicionarMeta();
    
        }
      }
    function removerMeta(pos) {
        listaMetas.splice( pos, 1 );
        setListaMetas([...listaMetas]);
      }
    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos]);
        setEditando(pos);
        setFrufru('Editar');
      }

      function adicionarPlano() {
        let novoPlano = {
          titulo: plano,
          tempo: situacao,
          tema: cor
        };
    
        setListaPlanos([...listaPlanos, novoPlano]);
    
        setPlano('');
        setSituacao('');
        setCor('');
      }

      function adicionarFilme() {

        if ( nomeFilme == '' || classificacaoFilme == '' || urlFilme == '' ) {
          alert('Preencha  todos os campos');

        }
        else {

          let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme
          }

          setListaFimes([...listaFilmes, novoFilme]);
          setNomeFilme('');
          setClassificacaoFilme('');
          setUrlFilme('');
          
        }
      }

    return(
        <div className="pagina-comps pagina">
            < Cabecalho titulo='Componets' />

            <div className="secao filmes">
              <h1> Catálogo de Filmes </h1>

              <div className="entradas">
                <input type="text" placeholder='Nome do Filme'  value={nomeFilme} onChange={ (e) => setNomeFilme(e.target.value) } />

                <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={ (e) => setClassificacaoFilme(e.target.value) } />

                <input type="text" placeholder='URL da Capa' value={urlFilme} onChange={ (e) => setUrlFilme(e.target.value) } />

                <button onClick={ adicionarFilme } > Adicionar </button>
              </div>

              <div className="lista">
                { listaFilmes.map( item => 
                  < CartaoFilme item={item} />
                ) }
              </div>
            </div>

            <div className="secao planos">
        <h1>Meu planos atuais</h1>

        <div className='entrada' >
          <input type="text" placeholder="Meu plano aqui" value={plano} onChange={ (e) => setPlano(e.target.value) } />
        
          <input type="text" placeholder="Situação do plano aqui" value={situacao} onChange={ (e) => setSituacao(e.target.value) } />
          
          <input type="text" placeholder="Cor de identificação" value={cor} onChange={ (e) => setCor(e.target.value) } />
          
          <button onClick={adicionarPlano} > Adicionar plano </button>
          </div>

          <div className="lista">
            {listaPlanos.map( ( item, pos ) => 
                < ItemPlano item={item} />
              )}
            
            </div>
        </div>

            <div className="secao">
                <h1> Transformando o contador em componente </h1>

                < Contador titulo='Passo' inicio='0' fim='20' />
                < Contador titulo='Erros' />
            </div>

            <div className='secao metas' >
                <h1> Tranformando os Items da Lista de Metas em Componentes </h1>        

                <div className='entrada' >
                    <input type='text' placeholder='Digite sua meta aqui' value={novaMeta} onKeyUp={teclaApertada} onChange={(e) => setNovaMeta(e.target.value)} />

                    <button onClick={adicionarMeta} > {frufru} </button>
                </div>

                <ul>
                    {listaMetas.map( ( item, pos ) =>
                        < ItemMeta
                            item={item}
                            pos={pos}
                            alterarMeta={alterarMeta}
                            removerMeta={removerMeta}
                        />
                    )}
                </ul>        
            </div>
        </div>
    )
}