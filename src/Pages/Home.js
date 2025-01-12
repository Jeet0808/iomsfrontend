import React from "react";

import Login from "./Login";
import SignUp from "./SignUP";

import "./Pagecss/Home.css"
const Home = ({onlogin}) => {
    
    return (
        <div>
            <h1>Home Page</h1>
            
            <SignUp onlogin = {onlogin}  />
        </div>
    );
};

export default Home;
