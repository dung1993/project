import React, { useState, useEffect } from "react";
import ChildrenComponent from './ChildrenComponent';

function useEffect() {
    const [showChildren, setShowChildren] = useState(false);
    const caption = "List Post";
    const sayHi = () => alert("Hello everyone!");
    return (
        <div className="container">
            <button onClick={() => setShowChildren(!showChildren)}>Toggle Children</button>
            {
                showChildren && <ChildrenComponent caption={caption} sayHi={sayHi} />
            }
        </div>
    )
}

export default useEffect;