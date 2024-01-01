import logo from "../Images/logo.png";
function NavBar() {
    return (

            <nav className="flex bg-dark-brown sticky ">
                {/*logo*/}
                <a href={"/"}>
                    <img src={logo} alt="Logo" className="w-auto max-w-15rem h-14 m-3 ml-[18px]"/>
                </a>
                {/* navbar Mobile*/}
                {/* navbar Links */}
                <ul className="flex flex-wrap flex-row justify-evenly space-x-16 mr-44 font-custom items-center ml-auto text-2xl">
                    <li>
                        <a id='home' className='text-[#F4CE14] ' href="#">Home</a>
                    </li>
                    <li>
                        <a id='about' className=' text-white hover:text-[#F4CE14]' href="#">About</a>
                    </li>
                    <li>
                        <a id='menu' className=' text-white hover:text-[#F4CE14]' href="#">Menu</a>
                    </li>
                    <li>
                        <a id='reservation' className=' text-white hover:text-[#F4CE14]' href="#">Reservation</a>
                    </li>
                    <li>
                        <a id='order' className=' text-white hover:text-[#F4CE14]' href="#">Order-online</a>
                    </li>
                    <li>
                        <a id='login' className=' text-white hover:text-[#F4CE14]' href="#">Login</a>
                    </li>
                </ul>
            </nav>


    );
}

export default NavBar;