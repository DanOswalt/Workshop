import React from 'react';

const CardNumber = ({ number }) => {
    return (
        <div className="CardNumber">
            <div className="accountNumber">{number}</div>
            <span className="truncatedFour">{number.slice(0, 4)}</span>
        </div>
    )
}

export default CardNumber;