import styled from "styled-components";
import { useState } from "react";

const RollDice = ({CurrentDice ,roleDice}) => {
      
   
    

  return (
   <> 
   <DiceImag>
   <div className='dice-1' onClick={roleDice}>
   <img src= {`/public/dice_${CurrentDice}.png`}/>
   </div>
   <p>Click on Dice To Roll</p>
   </DiceImag>
   
   </>    
  )
}

export default RollDice

const DiceImag =styled.div`
   margin-bottom: 12px;
    .dice-1{
        text-align :center;
        margin-top: 48px;
        cursor: pointer;
    }
    p{
        text-align: center;
        font-size : 24px;
        font-weight: 500;

    }
`