import GamePlay from "./components/GamePlay";
import StartGame from "./components/startgame";
import { useState } from "react";
import './App.css'

// const Button  = styled.button`background-color: black ;`


function App() {
  
 const [isGameStarted ,SetisGameStarted] = useState(false);
const toggleGamePlay = ()=>{
   SetisGameStarted((prev) =>! prev);

};
  return (
    <>
    {isGameStarted ? <GamePlay/> :<StartGame toggle={toggleGamePlay}/>}
    
    </>
    
  )
}

export default App
