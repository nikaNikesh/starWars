import React from "react";

import "./define-fields.css"


const DefineFields = ({serviceField, contentField}) => {

    return (
        <li className="list-group-item">
            <span className="term">{contentField}</span>
            <span>{serviceField}</span>
        </li>
    )
}

export default DefineFields;
