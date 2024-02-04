import React, { useState } from 'react';
import logo from '../Images/Footer/logo.png'
import email from '../Images/Footer/email.svg'
import { Link } from 'react-scroll';
function Footer() {
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleFocus = () => {
        setIsInputFocused(true);
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setIsInputFocused(false);
        }
    };
    return (
        <>
            <div id='mainContainer' className='flex bg-light-brown w-[100%] py-[60px] h-[500px]'>
                <div>
                    <ul className='text-white space-y-6 my-16 mx-44 font-Karla text-xl'>
                        <li className='hover:text-[#F4CE14]'><Link to="navBar" smooth={true}
                                                                   style={{cursor: 'pointer'}}>Home</Link></li>
                        <li className='hover:text-[#F4CE14]'><Link to="aboutSection" offset={-170} smooth={true}
                                                                   style={{cursor: 'pointer'}}>About</Link></li>
                        <li className='hover:text-[#F4CE14]'><Link to="menuContainer" offset={40} smooth={true}
                                                                   style={{cursor: 'pointer'}}>Menus</Link></li>
                        <li className='hover:text-[#F4CE14]'><Link to="TestimonialContainer" offset={-350} smooth={true}
                                                                   style={{cursor: 'pointer'}}>Testimonials</Link></li>
                        <li className='hover:text-[#F4CE14]'><Link to="navBar" smooth={true}
                                                                   style={{cursor: 'pointer'}}>Order</Link></li>
                        <li className='hover:text-[#F4CE14]'><Link to="navBar" smooth={true}
                                                                   style={{cursor: 'pointer'}}>Login</Link></li>
                    </ul>
                </div>
                <div id='box'
                     className='flex justify-center items-center mx-14 my-8 bg-dark-brown w-[40%] h-[350px] border-black border-[2px]'>
                    <div className='mb-[20px]'>
                        <img src={logo} alt="Logo" className='flex justify-center items-center mx-auto w-60 my-3'/>
                        <p className='text-[#888] font-Karla text-[16px] text-center'>
                            Restaurant St, Delicious City, Morocco 8500 <br></br>
                            booking@little.lemon.com <br></br>
                            Booking Request: +212 23 24 25 26 <br></br>
                            Open: 09:00 am - 01:00 pm <br></br>
                        </p>
                        <div className='h-[1px] w-[100px] bg-white mt-5 flex justify-center items-center mx-auto'></div>
                        <h2 className='text-3xl font-custom text-center text-[#F4CE14] mt-5'>Get News & Offers</h2>
                        <p className='text-[#888] font-Karla text-center font-thin text-[13px]'>
                            Subscribe To us & Get 25% off.
                        </p>
                        <div
                            className='flex mt-2 border-black border-[1px] justify-center items-center mx-auto relative'>
                            <img src={email} alt="Email Icon"
                                 className={`w-9 absolute left-2 top-1/2 transform -translate-y-1/2 ${isInputFocused ? 'opacity-0' : 'opacity-100'}`}/>
                            <input type='email' placeholder='Your email'
                                   className='w-[250px] h-[50px] bg-black/30 pl-12 focus:pl-4 focus:outline-none focus:border-blue-500 text-white/70'
                                   onFocus={handleFocus} onBlur={handleBlur}/>
                            <button className='w-[150px] h-[50px] bg-[#F4CE14] font-semibold font-Karla text-[18px]'>
                                SUBSCRIBE
                            </button>
                        </div>
                        <div className='text-[#888] absolute mt-9 left-[605px]'>
                            <p>© 2024 Little lemon All right Reserved || Made by Rania El morabet</p>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='text-white space-y-6 my-16 mx-44 font-Karla text-xl'>
                        <li className='hover:text-[#F4CE14]'><a href='https://www.facebook.com' rel="noreferrer"
                                                                target='_blank'>Facebook</a></li>
                        <li className='hover:text-[#F4CE14]'><a href='https://www.instagram.com' rel="noreferrer"
                                                                target='_blank'>Instagram</a></li>
                        <li className='hover:text-[#F4CE14]'><a href='https://twitter.com/RANIAELMORABET7'
                                                                rel="noreferrer" target='_blank'>Twitter</a></li>
                        <li className='hover:text-[#F4CE14]'><a href='https://www.youtube.com' rel="noreferrer"
                                                                target='_blank'>Youtube</a></li>
                        <li className='hover:text-[#F4CE14]'><a href='https://www.linkedin.com/in/rania-elmorabet/'
                                                                rel="noreferrer" target='_blank'>Linkedin</a></li>
                        <li className='hover:text-[#F4CE14]'><a href='https://www.google.com' rel="noreferrer"
                                                                target='_blank'>Google</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;