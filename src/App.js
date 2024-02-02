import React from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Menu from "./Components/Menu";
import Strength from "./Components/Strength";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <NavBar />
            <Header />
            <Home/>
            <About />
            <Testimonials />
            <Menu />
            <Strength />
            <Footer />
        </div>
    );
}

export default App;
