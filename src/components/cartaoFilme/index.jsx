import './index.scss';


export default function CartaoFilme(props) {

    function identificarClassificacao() {
        
        switch ( props.item.classificacao ) {
            case 'livre':
                return 'c-l';
                
            case '10':
                return 'c-10';
                
            case '12':
                return 'c-12';

            case '14':
                return 'c-14';

            case '16':
                return 'c-16';

            case '18':
                return 'c-18';

            default:
                return '';
        }

    }

    return(
        <div className="comp-cartao-filme">
            <img src={props.item.urlFilme} alt="F" />

            { props.item.estreia != '' && 
                <div className='estreia' >
                    { props.item.destaque == true &&
                        <i className='fa fa-star estrela' ></i>
                    }
                    Estreia { props.item.estreia }
                </div>
            }

            <p> {props.item.nome} </p> 

            <div className={ 'classificacao ' + identificarClassificacao()} > {props.item.classificacao} </div>
        </div>
    )
}