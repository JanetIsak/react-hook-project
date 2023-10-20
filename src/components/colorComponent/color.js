import {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";


export default function Color(){
    const [index, setIndex] = useState(0);
    const colors = ['white', 'blue', 'yellow']

    const unmountMyComp = () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        return root.unmount();
    }


    useEffect(() => {
        const timerId = setInterval(() => {
            if(index === colors.length-1){
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 1000);
        return () => clearInterval(timerId);   // its is either we add clearInterval with dependency or we leave the dependency for this set interval to work.
    }, [index]);


    return (
        <div>
            <p> Current Color: {colors[index]}</p>
            <button onClick={unmountMyComp}>Unmount</button>
        </div>
    );
}