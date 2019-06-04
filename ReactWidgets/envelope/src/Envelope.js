import React from 'react';
import Address from './Address.js';
import Stamp from './Stamp.js';

const Envelope = ({ people }) => {
    const [ fromPerson, toPerson] = people;
    return (
        <div className="Envelope">
            <div className="fromPersonContainer">
                <Address person={fromPerson} />
            </div>
            <div className="toPersonContainer">
                <Address person={toPerson} />
            </div>
            <Stamp />
        </div>
    )
}

export default Envelope;
