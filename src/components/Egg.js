import React from 'react';

// Realizati o noua componenta care sa aiba un input
//  pentru numar de oua. componenta aceasta este 
// parinte pentru o alta componenta.
//  Componenta copil are si ea un input 
// in care este scris ca default numele de "Eagle", 
// insa utilizatorul poate sa modifice in voie numele acela.

function Egg() {  
   const [ founder,setName] = useState(
        {
            egg:"" ,
            number:""
        }
    )

  return (

   <form action="">
        <input type="text" value={founder.egg}  onChange = {e => setName({...founder, egg:e.target.value})}/>

        <input type="text" value={founder.number} onChange = {e => setName({...founder, number:e.target.value})} />

        <h3>The name of eagle is {founder.egg}</h3>
        <h3> {founder.number}</h3>

        <h3>{JSON.stringify(founder)}</h3>


   </form>
  )
}

export default Egg