import React, {useState} from "react";
import Button from "./button";

interface ButtonClickEvent {
    target: {
      value: any;
    };
  }
function Main(){
    const [value,setValue] = useState('');
    return(
    <div className="body">
            <div className="title">
            <h3 className="head">calc</h3>
            <div className="togle">
            <div className="toggle">
             <div className="num">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
                <button className="btnn"><input type=""/></button>
        <div className="control">
            <p className="theme">THEME</p>
            </div>
            </div>
            </div>
         </div>
            <div className="screen">
         <form name="calc">
                <input type="text" name="number" readOnly id="screen" value={value}/>
                </form></div>
            <div className="cal-body">
                <div className="btn">
                    <Button name="7" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                    <Button name="8" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                    <Button name="9" onClick = {(e: ButtonClickEvent) => setValue(value + e.target.value)}/>
                    <Button background="hsl(221, 26%, 47%)" name="DEL"/>
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
                    <div className="last">
                    <Button background="hsl(221, 26%, 47%)" name="RESET" className="reset"/>
                    <div className="equal">
                    <Button  background="rgb(240, 8, 8)" name="="/>
                </div>
            </div>
    </div>
    </div>
        )
}

export default Main;