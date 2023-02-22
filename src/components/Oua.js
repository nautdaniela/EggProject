import React, { useState } from "react";


function Oua(props) {
   const [pasari, setPasare] = useState({
      name: 'Eagle',
      list: []
   });

   function listPasari() {
      pasari.list.push(pasari.name);
      setPasare({
         ...pasari,
         list: pasari.list
      })
      return pasari.list
   }

   return (
      <form>
         <br /><br />Nume pasare:
         <input type="text" onChange={(e) => setPasare({ ...pasari, name: e.target.value })} value={pasari.name}></input>

         <h3>In cuib sunt momentan {props.numberOua} oua de {pasari.name}</h3>
         <button onClick={(e) => { e.preventDefault(); props.showPasariHandler(listPasari()) }}>Store pasare</button>
      </form>
   )
}


export default Oua;