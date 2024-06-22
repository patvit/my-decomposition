import React from "react";
import News from "./News";
import SideWidget from "./SideWidget";

function Header({data}) {
    
    return (
        <header className="header">
            <News data={data}/>
            <SideWidget data={data}>
                <img className="sidewidget-img" src={data.sidewidget.src} alt="" />
            </SideWidget>
        </header>
    );
}

export default Header