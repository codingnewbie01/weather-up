import React from "react";
import { ReactDOM } from "react";

export default function Tab(props){
    return(
        <div id="tab">
            <span>{props.title}</span>
            <span>{props.value1}</span>
            <span>{props.value2}</span>
        </div>
    )
}