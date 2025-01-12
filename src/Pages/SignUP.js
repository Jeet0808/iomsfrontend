import React from "react";
import "../App.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "./Pagecss/Home.css"
import Login from "./Login";
const SignUp = (props) => {
    function handleLoginClick(){
        props.onlogin();
    }
    return (
        <>
        <div id="SignUp">
            <div id="Heading">
            <h1>Sign Up</h1>
            </div>
               <div id="SignUpForm">
                <label id="Email">Email</label>
                <input id="Email" placeholder="exa@gmail.com" required></input>
                <label id="Password">Password</label>
                <input id="Password" placeholder="" required></input>
                
                <Link to={"/"}>
                   

                   <button id="Signupbtn" onClick={handleLoginClick } >login</button>
                             
                  </Link>
               </div>
              
        </div>
        <Link to={"/Login"}></Link>
          <button>Login</button>
          </>
    )

}

export default SignUp   