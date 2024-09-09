import { useState } from "react";



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
        
        if(numElegido === numAAdivinar){
            console.log("GANASTE!")
            console.log(numElegido);
        } else if (numElegido != numAAdivinar && intentos !== 0) {
            console.log("Intenta de nuevo")
            setIntentos(intentos - 1)

        }
        
    }
    
  }


  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" value={numElegido} onChange={numElegido >= 0 && numElegido < 20 ? handleOnChange : alert("el numero elegido no está entre 0 y 20")} onKeyDown={handleKeyDown}/>
      </div>
    </div>
  )
}

export default Jugar
