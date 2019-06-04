import React, { Component } from 'react';

const Address = ({ person }) => {
    return (
        <div className="Address">
            <p>{person.name}</p>
            <p>{person.street}</p>
            <p>{person.city}</p>
        </div>
    )
}

export default Address;
