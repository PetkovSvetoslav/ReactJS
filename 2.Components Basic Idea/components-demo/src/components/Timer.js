import React from 'react';

export const Timer = (props) => {

let [time, setTime] = React.useState(0);

setTimeout(() => {
setTime(time + 1);
}, 1000);

    return (
        <div>
           <h2>Timer: {time} sec.</h2>
        </div>
    )
}