import './index.scss';
import axios from 'axios';

import Cabecalho from '../../components/cabecalho/index';
import { useState } from 'react';

export default function ChamadaApi() {

    const [ cep, setCep ] = useState('');
    const [ infoLogradouro, setInfoLogradouro ] = useState;

    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';

        let resp = await axios.get(url);
        let dados = resp.data;

        let msg = dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/' + dados.uf ;
        setInfoLogradouro(msg);
    }

    return(
        <div className="pagina-chamada-api pagina">
            < Cabecalho titulo='Chamando APIs' />

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