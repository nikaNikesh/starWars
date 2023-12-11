import React from "react";

import "./define-fields.css"


const DefineFields = ({item, serviceField, contentField}) => {

    return (
        <li className="list-group-item">
            <span className="term">{contentField}</span>
            <span>{item[serviceField]}</span>
        </li>
    )
}

export default DefineFields;
