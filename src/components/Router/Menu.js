import React, { useState } from "react";
import {Link} from "react-router-dom";

const menus = [
    {
        name : "Student Manager",
        path : "/student-manager"
    },
    {
        name : "Search Tab",
        path : "/search-tab"
    },
    {
        name : "List Post",
        path : "/list-post"
    }
]

function Menu() {
    const [selected, getSelected] = useState("Student Manager")
    return(
        <div className="container d-flex flex-column align-items-center">
        <h3>Menu Item</h3>
        <div className="w-100">
            {
                menus.map((menu) => (
                    <Link key={menu.name} 
                        to={menu.path}
                        className={`${menu.name === selected ? 'active': ''} btn btn-outline-primary w-100 mb-1`}
                        onClick={() => setSelected(menu.name)}
                    >
                        {menu.name}
                        
                    </Link>
                ))
            }
        </div>
    </div>
    )
}

export default Menu;