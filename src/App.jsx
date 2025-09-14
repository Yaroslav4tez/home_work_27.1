import { Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./header/header.jsx";
import Home from "./home/home.jsx"
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}/>

        <Route path="/contact" element={<Contact />}/>

        <Route path="*" element={<div>Ooops</div>} />
      </Routes>
    </div>
  );
};

export default App;
