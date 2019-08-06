import React from 'react';

export const Input = props => {
    return (
        <div>
            <input name={props.name} type={props.type} value={props.value} onChange={props.onValueChange}/>
        </div>

    )
};