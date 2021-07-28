import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import User from './components/User';
import MessageBox from './components/MessageInput'
import MessageList from './components/MessageList';
import { DateTime } from 'luxon';
import Loader from './components/Loading';

export default function App()
{
    const [Ready, setReady] = React.useState(false);
    const [icon, setIcon] = React.useState('./assets/icon.png');
    const [name, setName] = React.useState('Lily');
    const [desc, setDesc] = React.useState('A simple, short description');
    const me = {
        icon,
        name,
        desc
    };

    const otherPlayers = [
        { name: "Elite archer", desc: "A dangerous archer!", icon: "./assets/elite archer.png" },
        { name: "Bandit", desc: "...", icon: "./assets/bandit warrior.png" },
        { name: "...", desc: "", icon: "./assets/blade singer.png" },
        { name: "Khazad Soldier", desc: "You shall all fall before our legions!", icon: "./assets/Khazad_soldier.png" },
    ];

    const [messages, setMessages] = React.useState([
        {
            owner: me,
            message: "Lily, signing out",
            timeStamp: DateTime.now().minus({minutes: 10})
        },
        {
            owner: otherPlayers[1],
            message: "And why shouldn't we?",
            timeStamp: DateTime.now().minus({minutes: 3})
        },
        {
            owner: otherPlayers[0],
            message: "Because I said so. We must wait until the time is ripe.",
            timeStamp: DateTime.now().minus({minutes: 3})
        },
        {
            owner: otherPlayers[0],
            message: "Move too soon and we lose them.",
            timeStamp: DateTime.now().minus({minutes: 2})
        },
        {
            owner: otherPlayers[2],
            message: "Someone just logged in.",
            timeStamp: DateTime.now()
        }
    ]);

    if (!Ready) return (
        < Loader setReady={setReady} setUserIcon={setIcon} setUserName={setName} setUserDesc={setDesc} />
    );
    return (
        <div className="flex-right full-size">
            <div className="flex-down players">
                < User icon={icon} name={name} desc={desc} />
                < PlayerList Players={otherPlayers} />
            </div>
            <div className="flex-up messages">
                < MessageBox Messages={messages} setMessages={setMessages} me={me} />
                < MessageList messages={messages} />
            </div>
        </div>
    );
};