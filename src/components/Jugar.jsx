import { useState } from "react";
// import Score from "./Score/score"
// import Ganaste from "./Ganaste";


const Jugar = () => {
    const [ intentos, setIntentos  ] = useState(10);
    const [ numElegido, setNumElegido ] = useState(0)
    const numAAdivinar = 6;
    
    const handleOnChange = (e) => {
        e.preventDefault();
        setNumElegido(e.target.value)
    }
    
  const handleKeyDown = (e) => {
    
    if(e.key === 'Enter') {
        
        if(numElegido >= 0 && numElegido < 20){
        console.log(numElegido);
        } else {
            alert("el numero elegido no está entre 0 y 20");
        }
        setIntentos(intentos - 1);
    }
    if(intentos != 0 && numElegido === numAAdivinar){

        console.log("GANASTE!")
    } else {
        console.log("PERDISTE");
    }
    
  }


  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" value={numElegido} onChange={handleOnChange} onKeyDown={handleKeyDown}/>
      </div>
    </div>
  )
}

export default Jugar
