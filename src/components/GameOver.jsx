import RestartAltIcon from '@mui/icons-material/RestartAlt';
import '../styles/gameover.css'
const GameOver = ({highScore, restartGame}) => {
  return (
    <div className='gameover'>
      <div className="gameover_container">
        <div className="gameover_message">
            <p>Game Over!</p>
            <p>You Highest Score is: {highScore}</p>
        </div>
        <button className="restart_btn" onClick={restartGame}>
            <RestartAltIcon className="icon"/>
            <span>Restart</span>
        </button>
      </div>
    </div>
  )
}

export default GameOver
