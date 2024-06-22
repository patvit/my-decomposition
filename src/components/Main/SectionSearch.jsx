import React from "react";

function SectionSearch(props) {

  return (
    <a className="link search-section" href={props.section.href}>{props.section.title}</a>
  );
}

export default SectionSearch