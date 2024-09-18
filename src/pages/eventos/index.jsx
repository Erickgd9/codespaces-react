import './index.scss';

import Cabecalho from '../../components/cabecalho';

export default function Eventos() {

  function clicou() {
    alert('Oie, o usuário acaba de clicar');
  }

  function MovimentouMouse() {
    alert('Oie, o usuário acaba de movimentar o mouse');
  }

  function alterouValor(e) {
    let H = e.target.value;
    alert('Oie, o usuário acaba de alterar o valor do input');
  }
  
  function alterouChecked(e) {
    let H = e.target.checked;
    alert('Oie, o usuário acaba de alterar o valor do input');
  }
 
  return (
    <div className="pagina-eventos pagina">
      < Cabecalho titulo='Eventos' />

      <section className='secao' >
        <h1> Entendendo Eventos </h1>

        <p onClick={clicou} onMouseMOve={MovimentouMouse} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, est elit volutpat sem, ac feugiat leo justo eu purus. Nulla facilisi. Aenean eu lacus at turpis malesuada tincidunt. Sed ut mauris eu mauris efficitur posuere. Donec sed consectetur nulla. Maecenas at massa sit amet lacus 
        euismod viverra.</p>

        <input onChange={alterouValor} type='text' placeholder= 'Digite aqui alguma coisa' ></input>

        <textarea onChange={alterouValor} placehoder='Digite Aqui' ></textarea>

        
      <selection onChange={alterouValor} >
        
          <option> Selecione </option>    
          <option> Item A </option>    
          <option> Item B </option>    
          
        </selection>
  
        <div className='grupo' >
          
          <input type='checkbox' onChange={alterouChecked} /> Opção 1   
          <input type='checkbox' /> Opção 2   
      
        </div>
        
        <div className='grupo' >
          <div>
            <input type='radio' name='pgo' /> Opção 1   
          </div>
          <div>
            <input type='radio' name='pgo' /> Opção 2   
          </div>
      
        </div>
  
        <button onClick={clicou} > Clique Aqui </button>
      </section>
  
    </div>
  
  )

}