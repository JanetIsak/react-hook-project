import {useRef} from "react";


export default function Input(){
    const inputRef = useRef();
    const cursor = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={cursor}>Focus</button>
        </div>
    )
}