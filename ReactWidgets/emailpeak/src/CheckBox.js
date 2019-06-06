import React from 'react';

const CheckBox = ({ toggle }) => {
    return toggle ? 
           <i className="fa fa-thumbs-up"></i> :
           <i className="fa fa-thumbs-up checked"></i>
}

export default CheckBox;