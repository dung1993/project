import React, { useState } from "react";

function Gift(){
    const [gifts, setGifts] = useState(["keyBoard","Mouse","Monitor","Bag"])
    const [gift, setGift] = useState()

    const handleRandomGift = () => {
        let random = Math.floor(Math.random()*gifts.length);
        setGift(gifts[random]);
        setGifts((prev) =>{
            return prev.filter((item, index) => index != random)
        })
    }

    return(
        <div className="container">
            <h1 className="text-warning">
                {gifts.length > 0 ?
                    `${gift ? 'Congarguration: ' + gift : 'Please click on button to get gift'}`
                    : "Gift is empty"}
            </h1>
            <button className="btn btn-danger"
                onClick={handleRandomGift}
            >Random Gift</button>   
        </div>
    )
}

export default Gift;