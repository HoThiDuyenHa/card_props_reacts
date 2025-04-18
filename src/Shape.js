import React from 'react';

function Shape(props) {
    return (
        <div
            className="con" style={{ width: props.dai, height: props.rong, backgroundColor: props.bgr}}
        >
        </div>
    );
}

export default Shape;
