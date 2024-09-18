import './index.scss';

export default function Cabecalho(props) {

    return(
        <header className='comp-cabecalho' >
            <h1 className='titulo' > 
                Estudos de ReactJS | { props.titulo }
            </h1>
        </header>
    )
}