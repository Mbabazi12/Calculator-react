import React, {useState} from "react";
import Button from "./components/button";
import './App.css';
import './index.css';
import switch1 from "./images/switch1.png"
import Main from "./components/main";
import Toggle from "./components/toggle";
import useLocalStorage from "use-local-storage";
 

interface ButtonClickEvent {
  target: {
    value: any;
  };
}
function App() {
  const [value,setValue] = useState(''); 
  const [isWhite, setIsWhite] =useState(false);
  return(
    <div className="body" data-theme={isWhite ? "second" : "first"}>
  <div className="calc">
          <div className="title">
          <h3 className="head">calc</h3>
          </div>
          <div className="togle">
           {/* <div className="num">
              <p>1</p>
              <p>2</p>
              <p>3</p>
          </div> */}
          <Toggle 
          isChecked={isWhite}
          handleChange={() => setIsWhite(!isWhite)}/>
          </div>
          <div className="screen">
       <form name="calc">
              <input type="text" name="number" readOnly id="screen" value={value}/>
              </form></div>
          <div className="cal-body">
              <div className="btn">
                <div className="but">
                <Button name="7" onClick = {(e: ButtonClickEvent) => setValue(value + 7)}/>
                  <Button name="8" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="9" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                </div>
                  <div className="del"><Button  name="DEL"/></div>
                <div className="but">
                <Button name="4" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="5" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="6" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="+"/>
                  <Button name="1" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="2" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="3" onClick = "document.calc.number.value='2'"/>
                  <Button name="-"/>
                  <Button name="."/>
                  <Button name="0" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                  <Button name="/"/>
                  <Button name="X"/>
                </div>
                  </div>
                  <div className="last">
                  <div className="reset">
                  <Button name="RESET" className="reset"/>
                  </div>
                  <div className="equal">
                  <Button name="="/>
              </div>
              </div>
  </div>
  </div>
  </div>
      )
}

export default App;


   // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>