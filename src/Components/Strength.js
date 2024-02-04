import icon1 from '../Images/Strength/icon1.png';
import icon2 from '../Images/Strength/icon2.png';
import icon3 from '../Images/Strength/icon3.png';

function strength() {
    const strengthContainer=[
        {
            id: 1,
            image: icon1,
            name: 'Hygienic Food',
            description: 'Lorem Ipsum Is Simply Simple To Print And Type Vestibulum finibus ante nisl'
        },
        {
            id: 1,
            image: icon2,
            name: 'Fresh Environment',
            description: 'Lorem Ipsum Is Simply Simple To Print And Type Vestibulum finibus ante nisl'
        },
        {
            id: 1,
            image: icon3,
            name: 'Skilled Chefs',
            description: 'Lorem Ipsum Is Simply Simple To Print And Type Vestibulum finibus ante nisl'
        }
    ]
    return(
      <>
      <section>
          <div className='font-Karla text-[#F4CE14] text-4xl text-center mt-14'>
              <h2>Why Choose Us</h2>
          </div>
          <div className='bg-gray-500 w-36 h-[1px] flex justify-center items-center mx-auto mt-5'></div>
          <div className='text-6xl text-center mt-4 font-Karla font-bold'>
              <h1>Our Strength</h1>
          </div>
      </section>
      <section className='flex flex-row justify-center items-center flex-wrap'>
        {strengthContainer.map((strengthData) => (
        <div id='container' className='bg-[#EDEFEE] w-[400px] h-[280px] my-[90px] mx-8 border-gray-500 border-[0.5px] font-custom'>
            <div key={strengthData.id}>
                <img alt='strength' src={strengthData.image} className='w-32 flex justify-center items-center mx-auto my-5'/>
                <h2 className='text-center my-3 text-2xl font-[550] tracking-wide'>{strengthData.name}</h2>
                <p className='my-3 text-[18px] text-[#495E57] text-center'>{strengthData.description}</p>
            </div>
        </div>
          ))}
      </section>
      </>
    );
}
export default strength;