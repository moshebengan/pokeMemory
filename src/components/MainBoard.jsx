import { Suspense, useEffect, useState } from "react"
import Card from "./Card";
import Loading from "./Loading";
import '../styles/mainBoard.css'
import _ from 'underscore'
import axios from "axios";


const MainBoard = ({scoreIncrease, setGameOver}) => {


    const [pokemons, setPokemons] = useState([]);    
    const [clickedElements, setClickedElements] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervals = [
        [0, 4],  // 0-3 elements
        [4, 10],  // 4-9 elements
        [10, 18], // 10-17 elements
        [18, 28],// 18-27 elements
        [28, 46] // 28-45 elements
      ];
      const getPokemons = async () => {
        try {
          const promises = Array.from({ length: 46 }, (_, index) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
          );
  
          //wait for all promises to resolve
          const responses = await Promise.all(promises);
  
          const pokemonsData = responses.map(res => ({
              name: res.data.name,
              img: res.data.sprites.other["official-artwork"].front_default,
          }))
          // Splitting the pokemons to 5 inner arrays to handle to difficulty of the game
          const result = intervals.map(([start, end]) => pokemonsData.slice(start, end)) 
          setPokemons(result)
        } catch (error) {
          console.log(error);
        }
      };
      getPokemons();
    }, [setPokemons]);
    

    let imageArray = pokemons?.map((arr) => arr.slice());


    const handleClickedElements = (elem) => {
        setClickedElements(clickedElements.concat(elem))
    }

    const increaseIndex = () => {
        setIndex(index + 1);
    }


    const cleanClickedElements = () => {
        setClickedElements([]);
      };
    
      let cards;

    useEffect(() => {
        if (clickedElements?.length >= imageArray[index]?.length && index < 5) {
            increaseIndex();
            cleanClickedElements();

        }
    }, [clickedElements, index])

    if (imageArray.length > 0) {
        imageArray[index] = _.shuffle(imageArray[index])
    }
   

    cards = imageArray[index]?.map((obj) => {
        return (
            <Card
            key={obj.name}
            handleClickedElements={handleClickedElements}
            scoreIncrease={scoreIncrease}
            setGameOver={setGameOver}
            pokemon={obj}
            />
        )
    })

    console.log(index)
    
   

    
  return (
    <div className="mainboard_container">
      <div className={index > 2 ? "mainboard_flex" : "mainboard"}>
        <Suspense fallback={<Loading/>}>{cards}</Suspense>
      </div>
    </div>
  )
}

export default MainBoard
