import { stat } from 'fs';
import React, { useState } from 'react';

const Page = () => {
  const [state, setState] = useState({
    result: 0,
    firstNum: '',
    secondNum: '',
    operator: null,
    display: '0',
  });

  const action = (btn) => {
    const { firstNum, secondNum, operator } = state;

    if (btn === '=') {
      if (firstNum && secondNum && operator) {
        const newResult = calculate(firstNum, secondNum, operator);
        setState({
          ...state,
          result: newResult,
          firstNum: newResult.toString(),
          secondNum: '',
          operator: null,
          display: newResult.toString(),
        });
      }
      return;
    }

    if (['+', '-', '*', '/', '%'].includes(btn)) {
      setState({ ...state, operator: btn });
      return;
    }

    if (!operator) {
      setState((prev) => ({
        ...prev,
        firstNum: prev.firstNum + btn,
        display: prev.display === '0' ? btn : prev.display + btn,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        secondNum: prev.secondNum + btn,
        display: prev.display + btn,
      }));
    }
  };

  const calculate = (firstNum, secondNum, operator) => {
    const num1 = Number(firstNum);
    const num2 = Number(secondNum);
    const operations = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
      '/': num1 / num2,
      '%': num1 % num2,
    };
    return operations[operator];
  };

  const clear = () => {
    setState({
      result: 0,
      firstNum: '',
      secondNum: '',
      operator: null,
      display: '0',
    });
  };


  return <c-x style = {{height:100, width:350, margin:"auto"}} onClick={() =>{}}>
  <f-cc id="result" style={{height:100, width:350, backgroundColor:"black", color:"white", paddingTop:"100px", paddingBottom:"30px", fontSize:"38px"}}>
    {state.firstNum} {state.operator} {state.secondNum}
  </f-cc> 
  <f-x style={{height:100, width:350, backgroundColor:"black", padding:"10px", gap:"5px"}}>
      <f-cc style={{backgroundColor:"#5c5c5f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"30px", color:"white", fontFamily:"initial", fontWeight:"bold"}} onClick={clear}>AC</f-cc>
      <f-cc style={{backgroundColor:"#5c5c5f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"30px", color:"white", fontFamily:"initial", fontWeight:"bold"}} onClick={()=>{action("+/-")}}>+/-</f-cc>
      <f-cc style={{backgroundColor:"#5c5c5f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("%")}}>%</f-cc>
      <f-cc style={{backgroundColor:"chocolate", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial", fontWeight:"bold"}} onClick={()=>{action("/")}}>÷</f-cc>
  </f-x>

  <f-x style={{height:300, width:350, backgroundColor:"black", padding:"10px", gap:"5px"}}>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("7")}}>7</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("8")}}>8</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("9")}}>9</f-cc>
      <f-cc style={{backgroundColor:"chocolate", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white"}} onClick={()=>{action("*")}}>x</f-cc>
  </f-x>

  <f-x style={{height:300, width:350, backgroundColor:"black", padding:"10px", gap:"5px"}}>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("4")}}>4</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("5")}}>5</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("6")}}>6</f-cc>
      <f-cc style={{backgroundColor:"chocolate", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"25px", color:"white", fontFamily:"fantasy", fontWeight:"bold"}} onClick={()=>{action("-")}}>--</f-cc>
  </f-x>

  <f-x style={{height:300, width:350, backgroundColor:"black", padding:"10px", gap:"5px"}}>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("1")}}>1</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("2")}}>2</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("3")}}>3</f-cc>
      <f-cc style={{backgroundColor:"chocolate", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial", fontWeight:"bold"}} onClick={()=>{action("+")}}>+</f-cc>
  </f-x>

  <f-x style={{height:300, width:350, backgroundColor:"black", padding:"10px", gap:"5px"}}>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("")}}><img src="/1.png" style={{height:80, width:80}}/></f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action("0")}}>0</f-cc>
      <f-cc style={{backgroundColor:"#1f1f1f", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial"}} onClick={()=>{action(".")}}>.</f-cc>
      <f-cc style={{backgroundColor:"chocolate", height:80, width:80, borderRadius:"100%", cursor:"pointer", fontSize:"35px", color:"white", fontFamily:"initial", fontWeight:"bold"}} onClick={()=>{action("=")}}>=</f-cc>
  </f-x>
  <f-x style={{height:10, width:350, backgroundColor:"black", padding:"10px"}}></f-x>
</c-x>
}

export default Page