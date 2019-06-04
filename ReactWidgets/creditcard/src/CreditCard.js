import React from 'react';
import BankName from './BankName.js';
import CardNumber from './CardNumber.js';
import Expiration from './Expiration.js';     
import CardHolderName from './CardHolderName.js'

const CreditCard = ({ ccDetails }) => {
    const { bankName, cardNumber, expiration, cardHolderName } = ccDetails;
    
    return (
        <div className="CreditCard">
            <BankName name={bankName} />
            <CardNumber number={cardNumber} />
            <Expiration expiration={expiration} />
            <CardHolderName name={cardHolderName} />
        </div>
    )
}

export default CreditCard;