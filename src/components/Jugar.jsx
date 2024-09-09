import { useState } from "react";



const Jugar = () => {
    const [ intentos, setIntentos  ] = useState(10);
    const [ numElegido, setNumElegido ] = useState(0)
    const numAAdivinar = 6;
    

    const continuarJuego = (e) => {
        setNumElegido(e.target.value)
    }
    
  const handleKeyDown = (e) => {
    
    if(e.key === 'Enter') {
        const num = parseInt(numElegido, 10);
        
        if(num === numAAdivinar){
            console.log("GANASTE!")
            console.log(numElegido);
        } else if (num != numAAdivinar && intentos !== 0) {
            console.log("Intenta de nuevo")
            setIntentos(intentos - 1)
        }
    }
    
  }


  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" value={numElegido} onChange={continuarJuego} onKeyDown={handleKeyDown}/>
      </div>
    </div>
  )
}

export default Jugar
