import { useState } from "react";
import GameOver from "../Over/GameOver"
import './Jugar.css'; 
import Ganaste from "../Ganaste/Ganaste";



const Jugar = () => {
    const [ intentos, setIntentos  ] = useState(10);
    const [ numElegido, setNumElegido ] = useState(0);
    const [ ganaste, setGanaste ] = useState(null);
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
          setGanaste(true)
          console.log(numElegido);
      } else if (num != numAAdivinar && intentos > 1) {
          console.log("Intenta de nuevo")
          setIntentos(intentos - 1)
      } else if (intentos === 1) {
        setGanaste(false);
      }
  }


  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" value={numElegido} onChange={continuarJuego} onKeyDown={handleKeyDown}/>
        <div className={ganaste === false ? "estilo" : "noMostrar"}><GameOver /></div> 
        <div className={ganaste === true ? "estilo" : "noMostrar"}><Ganaste/></div>
      </div >
    </div>
  )
}

export default Jugar
