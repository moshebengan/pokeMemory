import { useState } from "react";
import "../styles/card.css";

const Card = ({ pokemon, setGameOver, scoreIncrease, handleClickedElements }) => {
   
  
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        if (isClicked) {
            setGameOver();
        } else {
            setIsClicked(true)
            const elemObj = {name: pokemon.name}
            handleClickedElements(elemObj);
            scoreIncrease();

        }
    }
  return (
    <div className="card">
        <img src={pokemon.img} className="card_img" alt="" onClick={handleClick}/>
        <p className="card_text">{pokemon.name}</p>
    </div>
  );
};

export default Card;
