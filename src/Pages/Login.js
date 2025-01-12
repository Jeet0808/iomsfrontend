import React from "react";
import "../App.css";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { Link, Outlet, link } from "react-router-dom";
import Dashboard from "./Dashboard "
import "./Pagecss/Home.css"


const Login = (props) => {

   const handleLoginClick  = () => {
    props.onlogin();
   }
    return (
        <div id="Login">
            <div id="Heading">
            <h1>Login</h1>
            </div>
               <div id="LoginForm">
                <label id="Email">Email</label>
                <input id="Email" placeholder="exa@gmail.com" required></input>
            
                <Link to={"/"}>
                   

                <button onClick={handleLoginClick } >login</button>
                          
               </Link>
               </div>
                
        </div>
    )

}

export default Login   