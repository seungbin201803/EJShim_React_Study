import React from 'react';
import logo from './logo.svg';
import Button from './Button';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <div className="header">
        <div className="logo">
          JINI DESIGN
        </div>
        
        <Button name="Home"/>
        <Button name="JINI"/>
      </div>
      <div className="content00">
       Welcome! Welcome! Welcome!
      </div>
      <Content/>
{/* 
      <div className="content-area">

      </div> */}

      
{/* 
     <div className="content01">content01</div>
     <div className="content02">content02</div>
     <div className="content03">content03</div>
 */}

     
    </div>
  )
}

export default App;
