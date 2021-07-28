import React from 'react';
import '../css/Loading.css';
import swal from 'sweetalert';

export default function Loader({ setReady, setUserIcon, setUserName, setUserDesc })
{

    const [name, setName] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const HandleSignIn = function ()
    {
        if (name === '' || document.getElementById('bIcon').value === "")
        {
            swal('You must have a name and icon!');
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(document.getElementById('bIcon').files[0]);
        reader.onload = function (e)
        {
            let image = new Image();
            image.src = e.target.result;
            image.onload = function ()
            {
                setReady(true);
                setUserIcon(image.src);
                setUserName(name);
                setUserDesc(desc);
            };
        }
    };

    return (
        <div className="LoaderBackground">
            <div className="signIn">
                <h2>Sign in:</h2>
                <div className="infoSet">
                    <label htmlFor="Name">Name: </label>
                    <input type="text" name="Name" id="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <br />
                <div className="infoSet">
                    <label htmlFor="Description">Description: </label>
                    <input type="text" name="Description" id="Description" value={desc} onChange={e => setDesc(e.target.value)} />
                </div>
                <div className="infoSet">
                    <label htmlFor="bIcon">Icon: </label>
                    <input type="file" className="bIcon" id="bIcon" accept="image/png" title="a" />
                </div>
                <button className="signInButton" onClick={HandleSignIn}>Sign in</button>
            </div>
        </div >
    );
};