import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Input =  styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000d; 
`;


function App() {
  const [conta, setConta] = useState(0);
  const [porcentgem, setPorcentagem] = useState(0);
  
  return (
    <div className="App">
      <div>
        <h1>Calculadora gorjeta!</h1>
        <p>Conta a pagar</p>
        <Input place-holder="digite o valor da conta" type="number" value={conta}/>
        <p>Porcentagem a pagar</p>
        <Input place-holder="digite a porcentagem do garçom" type="number" value={porcentgem}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;