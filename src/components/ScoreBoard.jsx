import '../styles/scoreboard.css'
import Pokeball from '../assets/Pokeball.png'

const ScoreBoard = ({score, highScore}) => {
  return (
    <div className="scoreboard"> 
    <div className="left">
        <div className="brand_container">
            <img src={Pokeball} alt="" className="brand_img" />
            <p className="brand_text">PokeMemory</p>
        </div>
    </div>

    <div className="right">
        <div className="scores_container">
            <p className="showScore">Score: {score}</p>
            <p className="showScore">Best Score: {highScore}</p>
        </div>
    </div>
      
    </div>
  )
}

export default ScoreBoard
