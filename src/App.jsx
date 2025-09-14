import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./header/header.jsx";
import './App.css'

const App = () => {
    return <div>
        <Header />
        <Routes>
            <Route path="/" element = {
                <h1>Home</h1>
                }/>
            <Route path="/about" element = {
                <h1>About</h1> 
            } />
            <Route path="*" element = {
                <div>Ooops</div>
            }/>
            <Route path="/contact" element = {
                <h1>Contact</h1>
            }/>
        </Routes>
    </div>
};

export default App;
