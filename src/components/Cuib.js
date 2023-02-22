import React, { useState } from "react";
import Oua from "./Oua";


function Cuib() {
   const [oua, setNrOua] = useState(0);
   const [listaPasari, setlistaPasari] = useState([]);

   let count = oua;

   function increaseNumber() {
      count++;
      setNrOua(count)
   }

   function showPasari(list) {
      console.log('list', list)
      setlistaPasari(list)
      console.log('listaPasari', listaPasari);
   }

   return (
      <div>
         <form>
            <br /><br />Nr OUA:
            <input type="number" onChange={(e) => setNrOua(e.target.value)} value={oua}></input>
         </form>
         <button onClick={increaseNumber}>Increase Oua</button>

         <Oua numberOua={oua} showPasariHandler={showPasari} />

         <ul>
            {listaPasari.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}


export default Cuib;