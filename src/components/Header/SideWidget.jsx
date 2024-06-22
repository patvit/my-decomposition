import React from "react";

function SideWidget(props) {
  const {data} = props;
  return (
    <div className="sidewidget">
        <a className="link" href={data.sidewidget.href}>
            {props.children}
            <p className="sidewidget-title">{data.sidewidget.title}</p>
            <div className="sidewidget-text">{data.sidewidget.text}</div>
        </a>
    </div>
  );
}

export default SideWidget