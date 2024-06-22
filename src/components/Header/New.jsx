import React from "react";

function New(props) {
    
    return (
        <li className="new">
            {props.children}
            <a className="link" href={props.new.href}>
                {props.new.title}
            </a>
        </li>
    );
}

export default New