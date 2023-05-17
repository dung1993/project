import React from "react";

function Spiner(){
    return (
        <div className="loading d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span>Loading...</span>
            </div>
        </div>

    )
}
export default Spiner;