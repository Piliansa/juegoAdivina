import { useState } from "react";
import GameOver from "../Over/GameOver"



const Jugar = () => {
    const [ intentos, setIntentos  ] = useState(10);
    const [ numElegido, setNumElegido ] = useState(0);
    const [ perdiste, setPerdiste ] = useState(false);
    const numAAdivinar = 6;
    

    const continuarJuego = (e) => {
        setNumElegido(e.target.value)
    }
    
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
    jugando();
    } 
  }

  const jugando = () => {
    
      const num = parseInt(numElegido, 10);
      
      if(num === numAAdivinar){
          console.log("GANASTE!")
          console.log(numElegido);
      } else if (num != numAAdivinar && intentos !== 0) {
          console.log("Intenta de nuevo")
          setIntentos(intentos - 1)
      } else if (intentos === 0) {
        setPerdiste(true);
      }
  }


  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" value={numElegido} onChange={continuarJuego} onKeyDown={handleKeyDown}/>
        <div ><GameOver { ...(perdiste === true ? {className: "noMostrar" }:{})}/></div> 
      </div >
    </div>
  )
}

export default Jugar
