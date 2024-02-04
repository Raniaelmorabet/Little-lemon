import salad from "../Images/About/salad.png";
import anime from "../Images/About/anime.png";
import React, { useState, useEffect } from 'react';

function About() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1678);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1700);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div id='aboutSection' className='bg-light-brown mb-[120px] overflow-hidden block'>
            <img src={anime}  alt="anime" id='anime' className="absolute w-43 h-[570px] opacity-80 "/>
            <section className='font-custom text-[#F4CE14] font-bold text-6xl  pt-20 z-30 relative '>
                <h2 id='aboutHeader' className="bg-black/20 pl-[22px] py-[5px] ">
                    Little Lemon <br></br>
                    Morocco
                </h2>
            </section>
            <section className='font-Karla text-white leading-loose w-[700px] ml-[22px] pt-12 pb-16 text-[20px] z-30 relative '>
                <p id='aboutPara'>
                    Little Lemon, a culinary gem that first graced the Moroccan food scene in 1995,
                    was born from the shared vision of two enterprising Italian brothers, Adrian and Mario.
                    In the midst of the vibrant cultural tapestry that defines Morocco,
                    they keenly observed a void in the culinary landscape – a dearth of authentic Mediterranean flavors.
                    Fueled by their passion for their homeland's rich gastronomic heritage,
                    the brothers embarked on a mission to introduce the delectable tastes of Italy to the diverse palate
                    of Morocco.
                </p>
            </section>
            {isWideScreen && (
                <img id='salad' alt="salad"  src={salad} className='absolute w-[750px] top-[1620px] z-40 left-[900px] object-fit '/>
            )}
        </div>
    );
}

export default About;