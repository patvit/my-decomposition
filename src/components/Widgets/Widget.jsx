import React from "react";

function Widget(props) {
    const { href, title, children } = props;
    return (
    <li className="widget-item">
        <a href={href}>
          <h3 className="widget-item-title">{title}</h3>
        </a>
        {children}
    </li>
    );
}

export default Widget