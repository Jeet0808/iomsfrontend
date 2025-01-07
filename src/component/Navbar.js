import React from "react";

import Logo from "./assets/Logo.png";
import Bell from "./assets/bell.png";
import SignOut from "./assets/signout.png";
import Settings from "./assets/settings.png";

import "./Nav.css";



const Navbar = () => {
    return (
        <header>
            <div id="Navbar">
                <div id="LeftNav">
                    
                    <img id="Logoimg" src={Logo} alt="Inventory Pro"></img>
                </div>
                <div id="RightNav">
                    <input id="Searchbar" type="text" placeholder="Search here"></input>
                    <img className="Icons" src={Bell}></img>
                    <img className="Icons" src={SignOut}></img>
                    <img className="Icons" src={Settings}></img>

                </div>

            </div>
        </header>

    )
}


export default Navbar