import React from "react";
import SectionSearch from './SectionSearch'
import billboard from '../../assets/flat-lay-cinematography-elements-with-copy-space.jpg'

function Main({data}) {

    return (
    <div className="main">
        <nav className="search-sections">
            {data.sections.map((section, i) => 
                <SectionSearch key={Date.now() + i*5} section={section} />
            )}
        </nav>
        <div className="search">
            <form>
                <div className="search-logo"><span className="search-text">Я</span>ндекс</div>
                <div className="search-row">
                    <input type="text" className="search-input" />
                    <button className="search-btn">Найти</button> 
                </div>
            </form>
            <div className="search-example">
                Найдётся всё. Например,
                <a href="#" className="link"> фаза луны сегодня</a>
            </div>
        </div>
        <a href="#" className="search-billboard">
            <img className="search-img" src={billboard} alt="..." />
        </a>
    </div>
    );
}

export default Main