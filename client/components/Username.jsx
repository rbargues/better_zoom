import React from 'react';
const Username = () => {
    function submitUsername() {
        const username = document.getElementById("username").value;
        fetch("/username", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                username: username
            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }
    return (
        <div className="username-input">
            <input id="username"></input>
            <button onClick={submitUsername} >Submit</button>
        </div>
    )
}

export default Username;