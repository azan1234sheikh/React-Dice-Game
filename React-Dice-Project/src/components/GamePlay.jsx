import styled from "styled-components";
import NumberSelector from "./NumberSelector"; 
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "./styled/Button,"; 
 import { Outlinebtn } from "./styled/Button,";
import Rules from "./Rules";
 const GamePlay = () => {
  const [Score ,setScore] = useState(0);
  const [Numberselector, setNumberselector] = useState();
  const [CurrentDice ,setCurrentDice] = useState(1);
  const [Error ,setError] = useState("");
 const [showRules ,setshowRules] = useState(false);


  const GenerateRandomnum =(min ,max) =>{
    // console.log(Math.floor(Math.random()*(max-min)+ min));
     return Math.floor(Math.random()*(max-min)+ min);

    }


   const roleDice =()=>{
    if(!Numberselector) {
      setError("You have not selected any number");
      return
    };
    setError("");
   const randomNum = GenerateRandomnum(1 ,7);
   setCurrentDice(randomNum);
   console.log(Numberselector);
   if(Numberselector == randomNum){
    setScore(prev =>prev +randomNum )
   }else{
    setScore(prev =>prev-2)
    }
    setNumberselector(undefined);
    
    console.log(randomNum);
   }
     const resetBtn =()=>{
       setScore(0);
     }
   return (
     <MainContainer>
      <div className="Top-section">
       <TotalScore Score ={Score}/>
       <NumberSelector setError={setError} Error={Error} Numberselector ={Numberselector} setNumberselector={setNumberselector}/>
      </div> 
      <RollDice CurrentDice={CurrentDice} roleDice={roleDice}/>
      <div className="btns">
        <Button onClick={resetBtn}>Reset Now</Button>
        <Outlinebtn onClick={()=>setshowRules((prev) =>!prev)}>{showRules ? "Hide" :"Show"} Rules</Outlinebtn>
        {showRules && <Rules/>}
      </div>
     </MainContainer>
   )
 }
 
 export default GamePlay

 const MainContainer = styled.main`
  padding-top : 70px;
  .Top-section{
    display: flex;
    justify-content: space-around;
    align-items : center;

  };
  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 280px;
    margin-bottom: 10px;
    gap: 20px;
  }
 `;