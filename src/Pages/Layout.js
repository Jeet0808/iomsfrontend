import { Link, Outlet, link } from "react-router-dom";

import Navbar from "../component/Navbar";
import SideNav from "../component/SideNav";
import MobileSide from "../component/MobileSide"

import "../App.css";

import "../component/SideNav.css";



const Layout = () => {
    return (
        <>
        <Navbar />

        <div id="Layout">
              
                    <div id="Sidebar">
                        <SideNav >
                       
                        </SideNav>
                      
                        
                    </div>

                  


                    <div id="display">
                        <Outlet></Outlet>
                        <hr></hr>
                       
                    <div id="Footer" >

                       <h6>@ InventoryPro Copyright 2025</h6>
                    </div>
                    </div>

                    <div id="MobileSide">
                        <MobileSide />
                    </div>
            

            </div>

        </>


    )
}

export default Layout