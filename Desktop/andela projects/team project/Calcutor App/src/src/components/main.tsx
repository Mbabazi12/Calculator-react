import React, {useState} from "react";
import Button from "./button";
import "../styles/main.css"

interface ButtonClickEvent {
    target: {
      value: any;
    };
  }
const Theme2 = () => {
    const [newTheme, setnewThemePage] = useState(false);
    const [hidenewTheme, sethidenewTheme] = useState(false);

    // const newPage = () 
    const [value,setValue] = useState('');
    return(
        <>
    <div className="body1">
            <div className="title1">
            <h3 className="head1">calc</h3>
            <div className="togle1">
            <div className="toggle1">
             <div className="num1">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
                <button className="btnn1"><input type=""/></button>
        <div className="control1">
            <p className="theme1">THEME</p>
            </div>
            </div>
            </div>
         </div>
            <div className="screen1">
         <form name="calc1">
                <input type="text" name="number1" readOnly id="screen1" value={value}/>
                </form></div>
            <div className="cal-body1">
                <div className="btn1">
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
                    <div className="last1">
                    <Button background="hsl(221, 26%, 47%)" name="RESET" className="reset"/>
                    <div className="equal1">
                    <Button  background="rgb(240, 8, 8)" name="="/>
                </div>
            </div>
    </div>
    </div>
    </>
        )
  }
export default Theme2;