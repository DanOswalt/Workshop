import React, { useState } from 'react';
import Heading from './Heading.js';
import Body from './Body.js';
import Pin from './Pin.js';
import CheckBox from './CheckBox.js';

const EmailSnippet = ({ email }) => {
    const { sender, subject, date, message } = email;
    const [ pinned, setPinned ] = useState(false);
    const [ checked, setChecked ] = useState(false);

    console.log(pinned)

    return (
        <div className="EmailSnippet">
            <div className="icons">
                <Pin toggle={pinned}/>
                <CheckBox toggle={checked}/>
            </div>
            <div className="snippet">
                <Heading sender={sender} subject={subject} date={date} />
                <Body message={message} />
            </div>
        </div>
    )
}

export default EmailSnippet;