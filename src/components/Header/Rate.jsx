import React from "react";

function Rate(props) {

    return (
        <li className="rate">
            {props.children}
            <a className="link" href={props.rate.href}>
                {`${props.rate.text} ${props.rate.num}`}
            </a>
        </li>
    );
}

export default Rate