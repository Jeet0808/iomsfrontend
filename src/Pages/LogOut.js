import React from "react";
import "../App.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Home from "./Home";

import "./Pagecss/Home.css"
const LogOut = ({ onlogin }) => {

    function handleclick() {
        onlogin();
    }
    return (
        <div id="Logout">
            <div id="Heading">
                <h1>Logout</h1>
            </div>
            <div id="LogOutForm">
                <div className="emailform">
                    <label id="Email">Email</label>
                    <input id="Email" placeholder="exa@gmail.com" required></input>
                </div>
                <div>

                    <label id="Password">Password</label>
                    <input id="Password" placeholder="" required></input>
                </div>

                <div>
                    <Link to={"/"}>

                        <button onClick={handleclick}>LogOut</button>

                    </Link>
                </div>

            </div>

        </div>
    )

}

export default LogOut   