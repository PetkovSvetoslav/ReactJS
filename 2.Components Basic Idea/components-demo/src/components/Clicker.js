import { useState } from "react";


export const Clicker = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(oldClicks => oldClicks + 1);
    }

if(clicks > 30) {
    return <h1>Finished Clicks</h1>
}
const dangerClicks = clicks > 20;
    return (
        <div>
            {dangerClicks && <h1>Danger Clicks</h1>}
    <h3>
        {clicks > 10 ? 'Medium clicks' : 'Normal clicks'}
    </h3>
        <button onClick={clickHandler}>{clicks}</button>
        </div>
        );
}