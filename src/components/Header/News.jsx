import React from "react";
import New from './New';
import Rate from './Rate';
import moment from "moment/min/moment-with-locales";

function News({data}) {
    moment.locale('ru');
    const time = moment(new Date()).format('LLLL');

    return (
        <div className="news">
            <div className="news-box">
                <nav>
                    {data.headerLinks.map((link) => 
                        <a className="link-news" key={link.id} href={link.href}>
                            <h4 className="widget__title">{link.title}</h4>
                        </a>
                    )}
                </nav>
                <div className="news-date">{time}</div>
            </div>
            <ul className="news-list">
                {data.news.map((news, index) =>
                    <New key={Date.now() + index*3} new={news}>
                        <img className="new-img" src={news.src} alt="..." />
                    </New>
                )}
            </ul>
            <ul className="rates-list">
                {data.rates.map((rate, index) => 
                    <Rate key={Date.now() + index*7} rate={rate} />
                )}
            </ul>  
        </div>
    ) 
}

export default News