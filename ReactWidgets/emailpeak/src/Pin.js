import React from 'react';

const Pin = ({ toggle }) => {
    const pinned = `fas fa-thumbtack ${toggle ? "pinned" : ""}`;
    return <i className={pinned}></i>
}

export default Pin;