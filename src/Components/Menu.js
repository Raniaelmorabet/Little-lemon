import menu1 from '../Images/Menu/menu1.png';
import menu2 from '../Images/Menu/menu2.png';
import menu3 from '../Images/Menu/menu3.png';
import anime from '../Images/About/anime.png';

function OpeningHours() {
    const openingHoursText = `
        <span style="color: #FFFFFF;">During winter daily from</span> &nbsp;
        <span style="color: #F4CE14;">7:00 pm</span> &nbsp;
        <span style="color: #FFFFFF;">to</span> &nbsp;
        <span style="color: #F4CE14;">9:00 pm</span>
    `;

    return (
        <div
            className='flex justify-center items-center font-custom text-2xl'
            dangerouslySetInnerHTML={{ __html: openingHoursText }}
        />
    );
}
function Menu() {
    const menuDataCol1 =[
         {
             id: 1,
             image: menu1,
             name: 'Greek salad',
             price: '$25.40',
             description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
         },
         {
             id: 2,
             image: menu2,
             name: 'Greek salad',
             price: '$59.50',
             description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
         },
         {
             id: 3,
             image: menu3,
             name: 'Greek salad',
             price: '$55.50',
             description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
         }
            ]
        const menuDataCol2 =[
        {
        id: 1,
        image: menu1,
        name: 'Greek salad',
        price: '$40.50',
        description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
        },
        {
        id: 2,
        image: menu2,
        name: 'Greek salad',
        price: '$35.50',
        description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
        },
        {
        id: 3,
        image: menu3,
        name: 'Greek salad',
        price: '$50.50',
        description: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.',
        }
            ]


    return (
        <>
            <div id='menuContainer' className='bg-light-brown w-[100%] py-[60px] mt-[60px]'>
                <header className='font-custom text-5xl text-[#F4CE14] items-center flex justify-center '>
                    <h2>Delicious Menu</h2>
                </header>
                <section className='flex flex-row gap-40 flex-wrap'>
                    {/* Menu column 1 */}
                    <section>
                        <img id='anime1' alt="anime1"  src={anime} className='absolute opacity-50 h-[865px] w-[1300px]'/>
                        {menuDataCol1.map((menuData) => (
                            <div key={menuData.id}
                                 className='flex flex-row space-y-20 flex-wrap ml-14 pb-3 z-30 relative'>
                                {/* Image */}
                                <div className='w-52'>
                                    <img src={menuData.image} alt={menuData.name}/>
                                </div>
                                {/* Container (header, price, and description) */}
                                <div>
                                    {/* Header and Price */}
                                    <div className='flex flex-row gap-40 font-custom'>
                                        <h3 className='text-white text-3xl'>{menuData.name}</h3>
                                        <h6 className='text-[#F4CE14] text-2xl'>{menuData.price}</h6>
                                    </div>
                                    {/* Description */}
                                    <div className=' text-[#EDEFEE]/50 w-[400px] pt-4 text-lg '>
                                        <p>{menuData.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* black line separator*/}
                    <div className='h-[600px] w-[2px] bg-black mt-16'></div>
                    {/* Menu column 2 */}
                    <section>
                        {menuDataCol2.map((menuData) => (
                            <div key={menuData.id} className='flex flex-row space-y-20 flex-wrap pb-3 z-30 relative'>
                                {/* Image */}
                                <div className='w-52'>
                                    <img src={menuData.image} alt={menuData.name}/>
                                </div>
                                {/* Container (header, price, and description) */}
                                <div>
                                    {/* Header and Price */}
                                    <div className='flex flex-row gap-40 font-custom'>
                                        <h3 className='text-white text-3xl'>{menuData.name}</h3>
                                        <h6 className='text-[#F4CE14] text-2xl'>{menuData.price}</h6>
                                    </div>
                                    {/* Description */}
                                    <div className=' text-[#EDEFEE]/50 w-[400px] pt-4 text-lg '>
                                        <p>{menuData.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
                <OpeningHours/>
                <button id='menuButton'
                        className='mx-auto flex justify-center items-center font-Karla w-[250px] h-[60px] bg-[#F4CE14] rounded-3xl relative text-2xl shadow-lg shadow-black/50 overflow-hidden mt-6'>
                </button>
            </div>
        </>
    );
}

export default Menu;