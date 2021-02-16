import React, {FunctionComponent} from 'react';
import './Menu.scss';

import {nameProps} from "./menu.type";

const Menu : FunctionComponent < nameProps > = props => {
    return (
        <div className="mainArea">
            <h1>Name: {props.name} Calculator {props.age}, {Math.random() * 30}</h1>
            <h1 onClick={props.click}> <strong>Delete my </strong> {props.children}
            </h1>
        </div>
    )
}


export default Menu;
