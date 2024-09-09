import Score from "./Score/score"


const Jugar = () => {
  return (
    <div>
      <div>
        <h2>Escribí un número del 1 al 20</h2>
        <input type="number" />
        <Score/>
      </div>
    </div>
  )
}

export default Jugar
