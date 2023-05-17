import { useState } from "react"

function UseState(){
    const [number, setNumber] = useState(0);
    const handleIncreament = () => {
        setNumber((prev) => prev + 1)
        setNumber((prev) =>  prev + 1)
        setNumber((prev) =>  prev + 1)
    }
    console.log('re-render');
    return (
        <div className="container">
            <h1>{number}</h1>
            <button onClick={handleIncreament}>Increment</button>
        </div>
    )
}

export default UseState;