import React from "react";
import { ReactDOM } from "react-dom/client";
import './style.css';

export function Button(props){
    return(
        <button class="btn">{props.btn}</button>
    )
}
