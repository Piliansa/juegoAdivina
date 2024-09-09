
import { useState } from 'react';
import './Global.css'
import Jugar from './components/Jugar/Jugar';
import Score from './components/Score/Score'



function App() {
  const [ show, setShow ] = useState(false);


  function ponerPlay() {
    setShow(!show);
  }

  return (
    <>
      <h1>Adivina el Número</h1>
      <div className="card">
      <button className='botonPlay' onClick={ponerPlay} {...(show === true ? {className: "noMostrar" }:{})}>
        <h1>PLAY</h1>
      </button>
        {/* {show === true ?  <Comp1/> : <over/>}  */}
        <div>{ show === true && <Jugar/> }</div>
        <Score/>
      </div>
      
      </>
  )
}

export default App;
