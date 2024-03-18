import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>

     <h2>How to play dice game</h2>
     <div className="text">

        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you 
            will get same point as dice{""} </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
     </div>
    </RulesContainer>
  )
}
const RulesContainer = styled.div`
margin-left: 212px;
background-color:  rgba(251, 241, 241, 1);
   padding: 18px;
   border-radius: 10px;

h2{
    font-size: 24px;
}
    .text{
        margin-top : 32px;
    }
  

`
export default Rules