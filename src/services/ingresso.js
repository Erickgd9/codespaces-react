

export default function calculatTotalIngresso( meioIng, qtdIng, cupom ) {
    let tot = 0;

    if ( meioIng == true ) {
        tot = ( qtdIng * 15.00 );
  
      }
      else {
        tot = ( qtdIng * 30.00 );
        
      }
  
      if ( cupom == 'QUERO50' ) {
        let desc = tot * 50 / 100;
        tot -= desc;
        
      }

    return tot
}