import React ,{Component} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard ';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Supplier from './Pages/Supplier';
import Error from './Pages/Error';
import Orders from './Pages/Orders';
import LogOut from './Pages/LogOut';
import Login from './Pages/Login';
import SignUp from './Pages/SignUP';
import { useState } from 'react';

function App() {
  const [login, setlogin] = useState(false);
 const handlelogin = () => {
  
  
    setlogin(!login);
    
 
 }
 
 
  
// we will call a service nad let user
  
  return (
  
    
    <BrowserRouter>
      <Routes>

      {login?
        ( <Route path='/' element={<Layout onlogin={handlelogin} />}>
        

    
       
        <Route path='/Category' element={<Category />}> </Route>
        <Route path='/Dashboard' element={<Dashboard />}> </Route>
        <Route path='/LogOut' element={<LogOut onlogin={handlelogin}/>}> </Route>
       
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Supplier' element={<Supplier />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
        <Route path='*' element={<Error />}></Route>

        </Route>
         ) : 
        (  <Route path='/' element={<Home onlogin={handlelogin}/>}>
           <Route path='/Login' element={<Login  />}> </Route>
        <Route path='/SignUp' element={<SignUp />}> </Route> 
        </Route>)
        
      }
        
      </Routes>
    </BrowserRouter>
   
  );
 
}


export default App;
