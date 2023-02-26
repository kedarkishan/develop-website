import React from 'react'
import'./App.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './components/Home'
import { Navbar } from './components/Navbar'
import { About } from "./components/About";
import { Signup } from './components/Signup';
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
function App() {
  return (
    <>

    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route> 
    </Routes>
    </>
   
  )
}

export default App
