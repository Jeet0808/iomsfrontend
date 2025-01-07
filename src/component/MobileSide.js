import React from "react";
import Home from "./assets/Home.png";
import Products from "./assets/store.png";
import Category from "./assets/category (1).png";
import Supplier from "./assets/agreement.png";
import Orders from "./assets/logistics.png";
import Dashboard from "./assets/dashboard.png";
import { Link, Outlet, link } from "react-router-dom";

import "../App.css";


const SideNav = (props) => {

    let img = props.img;

    return (

     
        <div id="MobileDiv">
        <Link className="LinkSide" to={"/"}>
            <div id="ContentSide">
                <div id="List">
                    <img className="IconsSide" src={Dashboard}></img>
                  
                </div>
            </div>
        </Link>
        <Link className="LinkSide" to={"/Orders"}>
            <div id="ContentSide">
                <div id="List">
                    <img className="IconsSide" src={Orders}></img>
                    
                </div>
            </div>
        </Link>
        <Link className="LinkSide" to={"/Product"}>
            <div id="ContentSide">
                <div id="List">
                    <img className="IconsSide" src={Products}></img>
                  
                </div>
            </div>
        </Link>

        <Link className="LinkSide" to={"/Category"}>
            <div id="ContentSide">
                <div id="List">
                    <img className="IconsSide" src={Category}></img>
                    
                </div>
            </div>
        </Link>
        <Link className="LinkSide" to={"/Supplier"}>
            <div id="ContentSide">
                <div id="List">
                    <img className="IconsSide" src={Supplier}></img>
                    
                </div>
            </div>
        </Link>

   

    </div>








    )
}

export default SideNav