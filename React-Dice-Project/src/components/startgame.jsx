import React from 'react'
import styled from 'styled-components'
import { Button } from './styled/Button,';


const StartGame = ({toggle}) => {
  return (
    <>
    <Container>
        <div className='img' >
        <img src='/public/dices 1.png'></img>
        </div>
        
    <div className='content'>
       <h1>DICE GAME</h1>
       <Button onClick={toggle}>PLay Now</Button>

    </div>
    </Container>
    </>
    
  )
}

const Container = styled.div `

 max-width: 1180px;
 display : flex ;
 height :100vh;
 margin :0 auto;
 align-items : center;
 gap : 95px;
 margin-left : 225px;

 .content h1{   
 
    font-size : 96px;
    color: #000000;
    white-space: nowrap;
    margin-bottom :20px;
    
    };

  .img{
    margin-left: 70px;

  }
  
`;
 


export default StartGame
