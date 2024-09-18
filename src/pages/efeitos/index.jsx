import './index.scss';

import { tratarNumeros } from '../../Utils/conversão';
import Cabecalho from '../../components/cabecalho/index';
import { useState, useEffect } from 'react';

export default function Efeitos() {

    const [ mencao, setMencao ] = useState('');
    const [ sitmencao, setSitmencao ] = useState('-');

    const [ nota1, setNota1 ] = useState('0');
    const [ nota2, setNota2 ] = useState('0');
    const [ nota3, setNota3 ] = useState('0');
    const [ media, setMedia ] = useState(0);
    const [ sitAluno, setSitAluno ] = useState('-');


    useEffect(() => {
        avaliarSituacao();
    }, [ media ])

    useEffect(() => {
        avaliarNota();
    }, [ nota1, nota2, nota3 ])

    useEffect(() => {
        avaliarMencao(); 
    }, [ mencao ])

    function avaliarSituacao() {
        let s = '';
        if ( media >= 6 ) {
            s = ('Aprovado');
        }
        else {
            s = ('DP');
        }
        setSitAluno(s);
    }

    function avaliarNota() {
        let m = ( ( tratarNumeros(nota1) + tratarNumeros(nota2) + tratarNumeros(nota3) ) / 3 );
        setMedia(m);
    }

    function avaliarMencao() {
        switch ( mencao ) {
            case 'P':
                setSitmencao('Plenamente Satisfatório');
                break;
            case 'S':
                setSitmencao('Satisfatório');
                break;
            case 'NS':
                setSitmencao('Não Satisfatório');
                break;
            default:
                setSitmencao('Invalido');
                break;
        }

    }

    return(
        <div className="pagina-efeitos pagina">
            < Cabecalho titulo='Efeitos' />

            <div className="secao">
                <h1> Situação Aluno </h1>

                <div className="sit-aluno">
                    <div> { sitmencao } </div>
                    
                    <div>
                        <label> Menção: </label>
                        <input type="text" value={mencao} onChange={ (e) => setMencao(e.target.value) }  />
                    </div>
                </div>
            </div>

            <div className="secao">
                <h1> Notas Aluno </h1>

                <div className="notas-aluno">
                    <div className="entradas">
                        <input type="text" value={nota1} onChange={ (e) => setNota1(e.target.value) } />
                        
                        <input type="text" value={nota2} onChange={ (e) => setNota2(e.target.value) } />

                        <input type="text" value={nota3} onChange={ (e) => setNota3(e.target.value) } />
                    </div>
                    
                    <div className="media">
                        <label> Média: </label>
                    
                        <div> { media.toFixed(1) } </div>
                    </div>
                    
                    <div className="media-situacao">
                        <label htmlFor=""> Sit.: </label>
                    
                        <div> { sitAluno } </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
