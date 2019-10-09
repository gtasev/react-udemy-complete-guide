import React from 'react';

const validationComponent = (props) => {

    const message = props.inputLength < 5 ? 'Text too short!' : 'Text long enough!';

    return (
        <div>
            <p>{message}</p>
        </div>

    )
};

export default validationComponent;
