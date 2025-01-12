import React from "react";

import Products from "./assets/store.png";
import Category from "./assets/category (1).png";
import Supplier from "./assets/agreement.png";
import Orders from "./assets/logistics.png";
import Dashboard from "./assets/dashboard.png";
import User from "./assets/user (1).png";
import { Link, Outlet, link } from "react-router-dom";

import "../App.css"


const SideNav = (props) => {

    let img = props.img;

    return (

        <>


            <div id="Linkdiv">
                
                <Link className="LinkSide" to={"/Dashboard"}>
                    <div id="ContentSide">
                        <div id="List">
                            <img className="IconsSide" src={Dashboard}></img>
                            <h3 className="toBeReplaced">Dashboard</h3>
                        </div>
                    </div>
                </Link>
                <Link className="LinkSide" to={"/Orders"}>
                    <div id="ContentSide">
                        <div id="List">
                            <img className="IconsSide" src={Orders}></img>
                            <h3>Orders</h3>
                        </div>
                    </div>
                </Link>
                <Link className="LinkSide" to={"/Product"}>
                    <div id="ContentSide">
                        <div id="List">
                            <img className="IconsSide" src={Products}></img>
                            <h3>Product</h3>
                        </div>
                    </div>
                </Link>

                <Link className="LinkSide" to={"/Category"}>
                    <div id="ContentSide">
                        <div id="List">
                            <img className="IconsSide" src={Category}></img>
                            <h3>category</h3>
                        </div>
                    </div>
                </Link>
                <Link className="LinkSide" to={"/Supplier"}>
                    <div id="ContentSide">
                        <div id="List">
                            <img className="IconsSide" src={Supplier}></img>
                            <h3>Supplier</h3>
                        </div>
                    </div>
                </Link>
               
                <div id="Sidebarfooter">
                    <img className="Icons" src={User}></img>
                    <div id="Profile">
                    <h3>User</h3>
                    <h4>View profile</h4>
                    </div>
                  
                </div>



            </div>





        </>


    )
}

export default SideNav