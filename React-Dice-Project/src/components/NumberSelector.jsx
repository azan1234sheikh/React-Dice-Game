import styled from 'styled-components';

const NumberSelector = ({Error,setError  , Numberselector,setNumberselector}) => {

    const array = [1,2,3,4,5,6];

    const setNumberSelectorHandler =(value) =>{
      setNumberselector(value);
      setError("");

    }

  return (
  <StyledNumberSelector>
    <p className="error">{Error}</p>
    <div className='flex'>
      {array.map((value,i)=>(
        <Box  isSelected ={value===Numberselector}  key={i} onClick={()=>setNumberSelectorHandler(value)}>{value}</Box>
      ))}
    </div>
    <p>Select Number</p>
  </StyledNumberSelector>  
  );
};

export default NumberSelector;


const StyledNumberSelector= styled.div `
   display: flex;
   flex-direction :column;
   align-items :end;
  .flex{
    display :flex;
    gap: 24px;
    
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
    font-weight :400;
  }
`
const Box = styled.div `
     height: 72px;
     width: 72px;
     border: 1px solid black;
     display: grid;
     place-items : center ;
     font-size: 24px;
     font-weight : 700;
     background-color : ${(props) =>(props.isSelected ? "black" : "white")};
     color : ${(props) =>(!props.isSelected ? "black" : "white")};

     
`