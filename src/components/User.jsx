import React from 'react';
import '../css/User.css';

export default function User ({ icon, name, desc })
{
    let shortName = name.substring(0, 10);
    if (name.length > 10) {
        shortName += "..."
    }
    let shortDesc = desc.substring(0, 20);
    if (desc.length > 20) {
        shortDesc += "..."
    }

    return (
        <div className="user">
            <img className="userIcon" src={icon} alt="" />
            <div className="userText">
                <div className="userName tooltip">{shortName}<span className="tooltiptext">{name}</span></div>
                <div className="usreDesc tooltip">{shortDesc}<span className="tooltiptext">{desc}</span></div>
            </div>
        </div>
    );
}