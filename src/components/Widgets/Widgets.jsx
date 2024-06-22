import React from "react";
import Widget from "./Widget";

function Widgets({ data }) {

    return (
    <div className="widgets">
        <ul className="widgets-list">
            <Widget title="Погода" href="#">
                <a className="link" href={data.weather.href}>
                    <div className="widget-content weather">
                        <div className="widget-content-img">
                            <img src={data.weather.src} alt="..." />
                        </div>
                        <div className="widget-content-temp">{data.weather.temp}&deg;</div>
                        <div className="widget-content-descript">
                            <div className="widget-content-row">
                                <span className="text">Утром</span><span className="temp">{data.weather.morningTemp}<br/></span>
                                <span className="text">Днём</span><span className="temp">{data.weather.daytimeTemp}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </Widget>
            <Widget title="Посещаемое" href="#">
                <div className="widget-content">
                    <ul className="widget-content-list">
                        {data.visited.map((el, i) =>
                            <li key={Date.now + i*9} className="widget-content-item">
                                <a className="link" href={el.href}><strong>{el.boldText}</strong>{el.text}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </Widget>
            <Widget title="Карта Германии" href="#">
                <a className="link" href={data.mapGermany.href}>
                    <div className="widget-content">{data.mapGermany.text}</div>
                </a>
            </Widget>
            <Widget title="Телепрограмма" href="#">
                <div className="widget-content">
                    <ul className="widget-content-list">
                        {data.TVPrograms.map((el, i) =>
                            <li key={Date.now + i*11} className="widget-content-item">
                                <a className="link" href={el.href}>
                                    {el.text}<span className="widget-content-item-text">{el.grayText}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </Widget>
            <Widget title="Эфир" href="#">
                <div className="widget-content">
                    <ul className="widget-content-list">
                        {data.broadcast.map((el, i) =>
                            <li key={Date.now + i*13} className="widget-content-item">
                                <a className="link" href={el.href}>
                                    <img className="widget-content-item-img" src={el.src} alt="" />
                                        {el.text}
                                    <span className="widget-content-item-text">{el.grayText}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </Widget>
        </ul>
    </div>
    )
}

export default Widgets