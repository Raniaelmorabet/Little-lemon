import React, { useEffect, useState } from "react";
import logo1 from "../Images/navBar/logo1.png";
import {Link} from "react-scroll";
import {Link as Routes} from 'react-router-dom'
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="navBar" className={`flex bg-dark-brown sticky ${scrolled ? 'scrolled' : ''}`}>
            {/* websites logo*/}
            <a href={"/"}>
                <img src={logo1} alt="Logo" className="w-auto max-w-15rem h-14 m-3 ml-[18px]" />
            </a>
            {/* navbar Mobile*/}
            {/* navbar Links */}
            <ul className="flex flex-wrap flex-row justify-evenly space-x-16 mr-44 font-custom items-center ml-auto text-2xl">
                <li><Routes id='home' to="/" smooth={true} className="text-[#F4CE14]">Home</Routes></li>
                <li><Link id='about' to="aboutSection" offset={-170} smooth={true} className=" text-white hover:text-[#F4CE14]" href="#">About</Link></li>
                <li><Link id='menu' to="menuContainer" offset={40} smooth={true} className=" text-white hover:text-[#F4CE14]" href="#">Menu</Link></li>
                <li><Link id="Testimonials" to="TestimonialContainer" offset={-350} smooth={true} className=" text-white hover:text-[#F4CE14]" href="#">Testimonials</Link></li>
                <li><Routes to="/Booking" className=" text-white hover:text-[#F4CE14]" >Order-online</Routes></li>
                <li><Link id="login" className=" text-white hover:text-[#F4CE14]" href="#">Login</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
