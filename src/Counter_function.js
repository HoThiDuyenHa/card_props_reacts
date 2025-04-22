import React, {useState } from 'react';

export function Counter_function() {
    const [count, setCount] = useState(0);

        return (
            <div>
                <h1>Gia tri: {count} </h1>
                <button onClick={() => setCount(count +1 )}>Tang</button>
                <button onClick={() => setCount(count -1)}>Giam</button>
            </div>
        );
    }
    //useState nam trong bo hook


export default  Counter_function;