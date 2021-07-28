import React from 'react';
import '../css/MessageList.css';
import { DateTime } from 'luxon';

export function Message({ owner, message, timeStamp, isImage })
{


    let height = 70;
    let newLines = (message.match(/\n/g) || []).length;
    if (newLines > 4)
    {
        height = newLines * 20 - 10;
    }
    return (
        <div className="message" key={owner.name + " : " + timeStamp.toMillis()} style={{ minHeight: height }}>
            <div className="messageIcon tooltip"><img alt="" src={owner.icon} /><span className="tooltiptext">{owner.name}</span></div>
            <p className="messageText">{message}</p>
            <div className="messageTime">{timeStamp.toLocaleString(DateTime.DATETIME_FULL)}</div>
        </div>
    );

}


export default function MessageList({ messages })
{

    const endRef = React.useRef();

    const scrollToBottom = () =>
    {
        endRef.current?.scrollIntoView()
    }

    React.useEffect(() =>
    {
        scrollToBottom()
    }, [messages]);

    return (
        <div className="messageList">
            {
                messages.map(m => Message(m))
            }
            <div ref={endRef} />
        </div>
    );
}