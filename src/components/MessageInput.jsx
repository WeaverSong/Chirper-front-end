import React from 'react';
import '../css/Messages.css';
import swal from 'sweetalert';
import { DateTime } from 'luxon';

export default function MessageBox({ Messages, setMessages, me })
{

    const HandleMessageInputText = function (e)
    {
        if (e.target.value.length < 200)
        {
            setMessage(e.target.value);
        } else
        {
            swal("Message limit is 200 characters");
            setMessage(e.target.value.substring(0, 200));
        }
    }
    const HandleMessageInputKeyUp = function (e)
    {
        if (e.key !== "Enter") return;
        if (e.target.value.length <= 1 || e.shiftKey === true)
        {
            return;
        }
        setMessages([...Messages, { owner: me, message: e.target.value, timeStamp: DateTime.now() }]);
        setMessage('');
    }

    const [message, setMessage] = React.useState('')

    return (
        <div className="messageBox">
                <textarea className="messageInput" rows="2" value={message} onChange={HandleMessageInputText} onKeyUp={HandleMessageInputKeyUp}></textarea>
        </div>
    );
};