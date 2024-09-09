
import { useState } from 'react';
import './App.css'
import Jugar from './components/Jugar/Jugar';



function App() {
  const [ show, setShow ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      setInputValue('');
    }
  }

  function ponerPlay() {
    setShow(!show);
  }

  return (
    <>
      <h1>Adivina el Número</h1>
      <div className="card">
      <button onClick={ponerPlay} {...(show === true ? {className: "noMostrar" }:{})}>
        <h1>PLAY</h1>
      </button>
        {/* {show === true ?  <Comp1/> : <over/>}  */}
        <div>{ show === true && <Jugar/> }</div>
      </div>
      <h2 className="read-the-docs">
        Colocá tu nombre:
      </h2>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Tu nombre'{...(show === true ? {className: "noMostrar" }:{})}/>
    </>
  )
}

export default App;
