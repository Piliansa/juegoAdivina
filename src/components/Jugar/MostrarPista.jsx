


const MostrarPista = (pista) => {
    pista = null;

    
        return (
            <div>
                { pista ? <h2>Pista: ¡Mas Alto!</h2> : <h2>Pista: ¡Mas bajo!</h2>  }
            </div>
  )
}

export default MostrarPista
