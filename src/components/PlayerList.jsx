import React from 'react';
import User from './User';
import '../css/PlayerList.css';
import { v4 as uuid } from 'uuid';

export default function PlayerList ({ Players }) {
    return (
        <div className="PlayerList">
            {
                Players.map(u => {
                    return < User name={u.name} desc={u.desc} icon={u.icon} key={uuid()} />
                })
            }
        </div>
    );
}