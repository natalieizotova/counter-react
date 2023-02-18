import React from 'react';
import Button from "./Button";

const Counter = (props) => {
    return (
        <div className="text">
            <Button buttonLabel = '-' buttonHandler={props.minus} />
            {props.count}
            <Button buttonLabel = '+' buttonHandler={props.plus}/>
        </div>
    );
};

export default Counter;