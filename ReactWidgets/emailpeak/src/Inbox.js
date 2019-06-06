import React from 'react';
import EmailSnippet from './EmailSnippet.js';

const Inbox = ({ emails }) => {
    const snippets =  emails.map(email => {
        return <EmailSnippet email={email} />
    })

    return (
        <div className="Inbox">
            {snippets}
        </div>
    )
}

export default Inbox;