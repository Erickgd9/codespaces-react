import './index.scss';
import axios from 'axios';

import Cabecalho from '../../components/cabecalho/index';
import { useState } from 'react';
import CartaoOmdb from '../../components/cartaoOmdb';

export default function ChamadaApi() {

    const [ cep, setCep ] = useState('');
    const [ infoLogradouro, setInfoLogradouro ] = useState;

    const [ filmeBusca, setFilmeBusca ] = useState('');
    const [ listaFilmes, setListaFilmes ] = useState([]);
    
    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';

        let resp = await axios.get(url);
        let dados = resp.data;

        let msg = dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/' + dados.uf ;
        setInfoLogradouro(msg);
    }

    async function buscarFilmes() {
        let url = 'http://www.omdbapi.com?apikey=d43a5114&s=' + filmeBusca;
        
        let resp = await axios.get(url);
        let dados = resp.data;

        let filmesEncontrados = dados.Search;
        setListaFilmes(filmesEncontrados);
    }

    return(
        <div className="pagina-chamada-api pagina">
            < Cabecalho titulo='Chamando APIs' />

            <div className="secao omdb">
                <h1> API omdb </h1>

                <div className="entradas">
                    <input type="text" placeholder="Nome do Filme" value={filmeBusca} onChange={ (e) => setFilmeBusca(e.target.value) } />

                    <button onClick={buscarFilmes} > Buscar </button>

                    <div className='lista-filmes' >
                        {listaFilmes.map( item => 
                            < CartaoOmdb item={item} />

                         )}
                    </div>

                    {/* <table>
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Filme </th>
                                <th> Ano </th>
                            </tr>    
                        </thead>

                        <tbody>
                            { listaFilmes.map( item => 

                                <tr>
                                    <td> {item.imdbID} </td>
                                    <td> {item.Title} </td>
                                    <td> {item.Year} </td>
                                </tr>

                            ) }
                        </tbody>
                    </table> */}
                </div>
            </div>

            <div className="secao">
                <h1> API do Correio </h1>
                
                <div>
                    <input type="text" value={ cep } onChange={ (e) => setCep(e.target.value) } placeholder='Digite o CEP' />

                    <button onClick={buscarCEP} > Buscar </button>
                </div>

                <p>
                    { infoLogradouro }
                </p>
            </div>
        </div>
    )
}