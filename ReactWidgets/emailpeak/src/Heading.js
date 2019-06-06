import React from 'react';

const Heading = ({ sender, subject, date}) => {
    return (
        <div className="Heading">
            <span>{sender}</span>
            <span>{subject}</span>
            <span>{date}</span>
        </div>
    )
}

export default Heading;