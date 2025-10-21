import styled from "styled-components";
import {useEffect, useState} from "react";

const StyledCalc = styled.div`
    display: flex;
    flex-direction: column;

    padding:4%;
    margin: 0 auto;

    align-items: center;
    justify-content: center;

    height: 50vh;
    width: 50%;
    border: 4px solid #395c6b;
    border-radius: 15px;

    background-image: url("/images/calc-bckground.jpeg") ;
    background-size: cover;
    
    @media screen and (max-width: 1000px){
        height: 80%;
    }
`

const StyledCalcTitle = styled.h4`
    color: floralwhite;
    font-size: calc(2px + 2vw);

    padding: 1%;

    background-color: #2b4651;
    border-radius: 8px;

    text-align: center;
    align-items: center;

    align-content: center;

`

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        margin-top: 10%;
        background-color: #adb7c1;
        height: 30%;
        width: 30%;
        padding: 3%;
    }
`

const StyledButton = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;

    grid-template-columns:40% 40% 40%;
    grid-template-rows: 40% 40% 40%;
    gap: 5%;
    padding-bottom: 2%;
    height: 35%;
    width: 45%;
    
    button{
        background-color: #244369;
        color: #d5d7d6;
        font-size: calc(6px + 1vw);
        border-radius: 5px;
        border: solid 2px #3c4961;
    }
`

const Result = styled.div`
    height:15%;
    width: 20%;
    background-color: #2b4651;
    border: none;
    border-radius: 15px;

    text-align: center;
    align-items: center;
    justify-content: center;

    align-content: center;
`

export default function Calculator(){
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [operator, setOperator] = useState('');
    const [output, setOutput] = useState<string>();
    const [negative, setNegative] = useState(false);

    useEffect(()=>{
        const num1 = Number(one);
        const num2 = Number(two);

        if(operator === '+'){
            const answer = num1 + num2;
            setOutput(String(answer));
        }else if(operator === '-'){
            const answer = num1  - num2;
            setOutput(String(answer));
        }else if(operator === '*'){
            const answer = num1  * num2;
            setOutput(String(answer));
        }else if(operator==='/'){
            const answer = num1 / num2;
            setOutput(String(answer));
        }else if(operator === '**'){
            const answer = num1  ** num2;
            setOutput(String(answer));
        }else if(operator == 'Clear'){
            setOutput('');
        }
    }, [operator, one, two]);

    useEffect(() => {
        if(Number(output) < 0){
            setNegative(true);
        }else{
            setNegative(false);
        }
    }, [output]);

    return (
        <StyledCalc>
            <StyledCalcTitle>Sofia's Calculator</StyledCalcTitle>
            <StyledInput>
                <input type="text" placeholder="" value={one} onChange={(e) => setOne(e.target.value)}/>
                <input type="text" placeholder="" value={two} onChange={(e) => setTwo(e.target.value)}/>
            </StyledInput>
            <StyledButton>
                <button onClick={() => setOperator('+')}>+</button>
                <button onClick={()=>setOperator('-')}>-</button>
                <button onClick={()=> setOperator('*')}>*</button>
                <button onClick={()=> setOperator('/')}>/</button>
                <button onClick={()=> setOperator('**')}>**</button>
                <button onClick={()=> setOperator('Clear')}>Clear</button>
            </StyledButton>
            <Result>
                <h2 style={{color: negative ? "red" : "black"}}>{output}</h2>
            </Result>
        </StyledCalc>
    )
}