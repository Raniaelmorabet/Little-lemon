import delivery from "../Images/Home/delivery.svg";
import card1 from "../Images/Home/card1.jpg";
import card2 from "../Images/Home/card2.jpg";
import card5 from "../Images/Home/card5.avif";
import card4 from "../Images/Home/card4.avif";

function Home() {
    return (
        <>
            {/* Card1 intro */}
            <div className='flex flex-wrap'>
                <h2 className='font-custom  font-bold text-4xl mt-[60px] ml-[22px]'>This weeks specials!</h2>
                <button id='homeButton'
                        className='font-Karla w-[250px] h-[60px] bg-[#F4CE14] rounded-3xl relative top-[35px] font-semibold text-2xl left-[1082px] shadow-lg shadow-black/50 overflow-hidden'>
                    Online Menu
                </button>
            </div>
            {/* Card1 container */}
        <div className='flex flex-wrap space-x-4 mb-[190px] '>
            <div id='cardContainer' className='bg-[#EDEFEE] w-[400px] min-h-[10rem] shadow-lg rounded-md overflow-hidden mt-[60px] ml-[22px] justify-center flex flex-wrap'>
                    <img src={card1} className='w-full border border-black'/>
            {/* Card1 title */}
                <div className=' p-5 flex-col gap-[14rem]'>
                     <div className='flex items-center gap-[10rem] flex-row font-custom font-semibold text-2xl '>
                             <span>
                                Greek salad
                             </span>
                             <span className='text-[#EE9972]'>
                                 $12.99
                             </span>
                        </div>
            {/* Card1 paragraph */}
                    <div className='pt-6 font-Karla text-gray-600 text-[20px] w-[300px]'>
                            <p>The famous greek salad of crispy
                            lettuce, peppers, olives and our
                            Moroccan style feta cheese,
                            garnished with crunchy garlic
                            and rosemary croutons.
                        </p>
                        </div>
                </div>
            {/* Card1 button */}
                <div className='flex flex-row gap-[10rem] font-semibold pt-6 mr-[19px] mb-2 text-[18px] hover:text-[#EE9972]'>
                            <span>
                                <button className='hover:ml-[13px] duration-[750ms]'>Order a delivery</button>
                            </span>
                            <span>
                                <img id='delivery' className='w-[40px] relative bottom-[8px]' src={delivery}/>
                            </span>
                </div>
            </div>
            {/* Card2 container */}
            <div id='cardContainer' className='bg-[#EDEFEE] w-[400px] min-h-[10rem] shadow-lg rounded-md overflow-hidden mt-[60px] ml-[22px] justify-center flex flex-wrap'>
                <img src={card2} className='w-full border c border-black'/>
                {/* Card2 title */}
                <div className=' p-5 flex-col gap-[14rem]'>
                    <div className='flex items-center gap-[7rem] flex-row font-custom font-semibold text-2xl '>
                             <span>
                                Special Bruchetta
                             </span>
                        <span className='text-[#EE9972]'>
                                 $5.99
                             </span>
                    </div>
                {/* Card2 paragraph */}
                    <div className='pt-6 font-Karla text-gray-600 text-[20px] w-[300px]'>
                        <p>The famous greek salad of crispy
                            lettuce, peppers, olives and our
                            Moroccan style feta cheese,
                            garnished with crunchy garlic
                            and rosemary croutons.
                        </p>
                    </div>
                </div>
                {/* Card2 button */}
                <div className='flex flex-row gap-[10rem] font-semibold pt-6 mr-[19px] mb-2 text-[18px] hover:text-[#EE9972]'>
                            <span>
                                <button className='hover:ml-[13px] duration-[750ms]'>Order a delivery</button>
                            </span>
                    <span>
                                <img id='delivery' className='w-[40px] relative bottom-[8px]' src={delivery}/>
                            </span>
                </div>
            </div>
                {/* Card3 container */}
                <div id='cardContainer' className='bg-[#EDEFEE] w-[400px] min-h-[10rem] shadow-lg rounded-md overflow-hidden mt-[60px] ml-[22px] justify-center flex flex-wrap'>
                    <img src={card4} className='w-full h-[267px] border c border-black object-cover'/>
                {/* Card3 title */}
                    <div className=' p-5 flex-col gap-[14rem]'>
                        <div className='flex items-center gap-[8rem] flex-row font-custom font-semibold text-2xl '>
                                 <span>
                                    Caramel Dessert
                                 </span>
                            <span className='text-[#EE9972]'>
                                     $5.00
                                 </span>
                        </div>
                        {/* Card3 paragraph */}
                        <div className='pt-6 font-Karla text-gray-600 text-[20px] w-[300px]'>
                            <p>The famous greek salad of crispy
                                lettuce, peppers, olives and our
                                Moroccan style feta cheese,
                                garnished with crunchy garlic
                                and rosemary croutons.
                            </p>
                        </div>
                    </div>
                {/* Card3 button */}
                    <div className='flex flex-row gap-[10rem] font-semibold pt-6 mr-[19px] mb-2 text-[18px] hover:text-[#EE9972]'>
                                <span>
                                    <button className='hover:ml-[13px] duration-[750ms]'>Order a delivery</button>
                                </span>
                        <span>
                                    <img id='delivery' className='w-[40px] relative bottom-[8px]' src={delivery}/>
                                </span>
                    </div>
                </div>
                {/* Card4 container */}
                <div id='cardContainer' className='bg-[#EDEFEE] w-[390px] min-h-[10rem] shadow-lg rounded-md overflow-hidden mt-[60px] ml-[22px] justify-center flex flex-wrap'>
                    <img src={card5} className='w-full h-[267px] border c border-black object-cover'/>
                {/* Card4 title */}
                    <div className=' p-5 flex-col gap-[14rem]'>
                        <div className='flex items-center gap-[9rem] flex-row font-custom font-semibold text-2xl '>
                                 <span>
                                    Lemon Tarts
                                 </span>
                            <span className='text-[#EE9972]'>
                                     $10.00
                                 </span>
                        </div>
                {/* Card4 paragraph */}
                        <div className='pt-6 font-Karla text-gray-600 text-[20px] w-[300px]'>
                            <p>The famous greek salad of crispy
                                lettuce, peppers, olives and our
                                Moroccan style feta cheese,
                                garnished with crunchy garlic
                                and rosemary croutons.
                            </p>
                        </div>
                    </div>
                {/* Card4 button */}
                    <div className='flex flex-row gap-[10rem] font-semibold pt-6 mr-[19px] mb-2 text-[18px]'>
                                <span>
                                    <button id='order' className='hover:ml-[13px] duration-[750ms] hover:text-[#EE9972]'>Order a delivery</button>
                                </span>
                        <span>
                                    <img id='delivery' className='w-[40px] relative bottom-[8px]' src={delivery}/>
                                </span>
                    </div>
                </div>
            </div>
</>
    );
}

export default Home;