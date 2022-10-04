import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomComponent from './components/RandomComponent';


function App() {

  // syntax: const[state, function] = useState(initialValue of state)];
  const [num1, setNum1] = useState(10); // num1 with initial value of 10 set by function setNum1;
  const [listA, setListA] = useState([]); // listA with initial value of empty array set by setListA;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomComponent
          // syntax : props={value}
          // props can be any name
          // value can be anything
          anyState={5}
          anyFunction={()=> alert("Hi u clicked me!")}
          num={num1} // passing num1 state to num props
          setNum={setNum1} // passing setNum1 function to setNum props
          list={listA} // passing listA state to list props
          setList={setListA} // passing setListA function to setList props
        />
       
      </header>
    </div>
  );
}

export default App;
