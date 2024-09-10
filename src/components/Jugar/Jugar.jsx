import { useState } from "react";
import GameOver from "../Over/GameOver"
import './Jugar.css'; 
import Ganaste from "../Ganaste/Ganaste";




const Jugar = () => {
    const [ intentos, setIntentos  ] = useState(10);
    const [ numElegido, setNumElegido ] = useState(0);
    const [ ganaste, setGanaste ] = useState(null);
    const pista1 = "Pista: ¡Más alto!";
    const pista2 = "Pista: ¡Más bajo";
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
          } else if( num < 0 || num > 20){
            alert("El numero debe estar entre 0 y 20")
          }
           else if (num < numAAdivinar && intentos > 1) {
            alert(pista1)
            setIntentos(intentos - 1)
          }else if (num > numAAdivinar && intentos > 1) {
            alert(pista2);
            setIntentos(intentos - 1)
          } else if (intentos === 1) {
            setGanaste(false);
          }
    }


  return (
    <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input className="inputStyle" type="number" value={numElegido} onChange={continuarJuego} onKeyDown={handleKeyDown}/>
        <div className={ganaste === false ? "estilo" : "noMostrar"}><GameOver /></div> 
        <div className={ganaste ? "estilo" : "noMostrar"}><Ganaste/></div>
        
        
    </div>
  )
}

export default Jugar
