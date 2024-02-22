import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Menu from "./Components/Menu";
import Strength from "./Components/Strength";
import Footer from "./Components/Footer";
import Booking from "./Components/Booking";

function App() {
    return (
        <Router>
            <div>
                    <NavBar />
                
                <Routes>
                    <Route exact path="/" element={
                        <>
                <Header/>
                <Home/>
                <About/>
                <Testimonials/>
                <Menu/>
                <Strength/>
                        </>
                    } />
                    <Route exact path="/Booking" element={<Booking />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
