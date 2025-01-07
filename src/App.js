import React ,{Component} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard ';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Supplier from './Pages/Supplier';
import Error from './Pages/Error';
import Orders from './Pages/Orders';

function App() {
  
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        <Route index element={<Dashboard/>}></Route>
        <Route path='/Category' element={<Category />}> </Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Supplier' element={<Supplier />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
        <Route path='/Error' element={<Error />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
   
  );
 
}


export default App;
