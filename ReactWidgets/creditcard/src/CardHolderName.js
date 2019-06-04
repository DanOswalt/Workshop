import React from 'react';

const CardHolderName = ({ name }) => {
    return (
        <div className="CardHolderName">
            <div className="cardHolderName">{name.toUpperCase()}</div>
        </div>
    )
}

export default CardHolderName;