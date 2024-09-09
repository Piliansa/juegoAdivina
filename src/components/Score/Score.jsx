import { useState } from "react"
import PropTypes from 'prop-types'



const Score = () => {
const [ score, setScore ] = useState(0);
const [ highScore, setHighScore ] = useState(0);

    const sumar = () => {
        const newScore = score + 1;
        setScore(newScore);
        if( newScore > highScore ) {
          setHighScore(newScore);
        }
    }
    <comp1/>
  return (
    <div>
      <h3>Score:{score}</h3>
      <h3>HighScore: {highScore}</h3>
      <button onClick={sumar}>Aumentar score</button>
    </div>
  )
}

Score.propTypes = {
  inputValue: PropTypes.string
}

export default Score
