import React from "react";

let Button = (props: any) =>{
    return(
        <button type="button" style={{backgroundColor: props.background,} }>{props.name}</button>
    )
}

export default Button;