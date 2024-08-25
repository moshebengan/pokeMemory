import Pokeball from '../assets/Pokeball.png'
import '../styles/loading.css';

const Loading = () => {
  return (
    <div className="loading">
        <p>Loading...</p>
        <img src={Pokeball} alt="" className="loadingImg" />
    </div>
  )
}

export default Loading
