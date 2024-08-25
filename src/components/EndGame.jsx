import RestartAltIcon from '@mui/icons-material/RestartAlt';


const EndGame = ({handleWin}) => {
  return (
    <div className="gameover">
      <div className="gameover_container">
        <div className="gameover_message">
        <p>Congratulations, You win!</p>
        </div>
        <button className="restart_btn" onClick={handleWin}>
            <span><RestartAltIcon/></span>
            <span>Play Again</span>
        </button>
      </div>
    </div>
  )
}

export default EndGame
