import React from 'react';

const Expiration = ({ expiration }) => {
    return (
        <div className="Expiration">
            <div className="expLabel">
                <div>VALID</div>
                <div>THRU</div>
            </div>
            <div className="expDate">{expiration}</div>
        </div>
    )
}

export default Expiration;
