import booking from "../Images/Reservation/booking.png"
function Booking() {
    return(
      <>
          <div className='flex mx-auto w-[85%] bg-dark-brown -[800px] my-[150px]'>
              <div className='w-[70%]'>
                  <h3 className='text-white font-custom text-center text-7xl mt-[60px]'>Online Reservation</h3>
                  <p className='flex justify-center items-center mx-auto text-[18px] font-Karla text-white mt-3 gap-2 font-semibold'>Booking
                      request <p className='text-[#F4CE14] tracking-wider'>+21261626364</p> or fill out the order form
                  </p>
                  <div>
                      <form>
                          <fieldset>
                              <div id='input' className='flex justify-center items-center mx-auto gap-7 mt-10'>
                                  <input type='text' placeholder=' Your Name'
                                         className='bg-black/30 w-96 h-[55px] border-black border-[0.5px] text-white pl-4'></input>
                                  <input type='text' placeholder=' Phone Number'
                                         className='bg-black/30 w-96 h-[55px] border-black border-[0.5px] text-white pl-4'></input>
                              </div>
                              <div className='flex justify-center items-center mx-auto gap-7 mt-10'>
                                  <select id='input-person'
                                          className='bg-black/30 w-[246px] h-[55px] border-black border-[0.5px] text-white'>
                                      <option value='1 person'> 1 Person</option>
                                      <option value='2 person'> 2 Person</option>
                                      <option value='3 person'> 3 Person</option>
                                      <option value='4 person'> 4 Person</option>
                                      <option value='5 person'> 5 Person</option>
                                  </select>
                                  <input type='date' id='input-date'
                                         className='bg-black/30 w-[248px] h-[55px] border-black border-[0.5px] text-white'></input>
                                  <input type='time' id='input-time'
                                         className='bg-black/30 w-[246px] h-[55px] border-black border-[0.5px] text-white'></input>
                              </div>
                              <div className='flex justify-center items-center mx-auto gap-7 mt-10'>
                                  <input type='text' id='input-message' placeholder='Message'
                                         className='bg-black/30 w-[795px] h-[200px] border-black border-[0.5px] text-white pl-4 pb-28'/>
                              </div>
                              <button id='btn-booking'
                                      className='flex justify-center items-center mx-auto mt-10 font-Karla w-[795px] h-[60px] bg-[#F4CE14]  relative text-2xl shadow-black/50 overflow-hidden tracking-wider'></button>
                          </fieldset>
                      </form>
                  </div>
              </div>
              <div className='relative flex-wrap border-l-2 border-[#F4CE14]'>
                  <img src={booking} alt='booking' className='bg-white h-[800px]'></img>
                  <div
                      className='bg-dark-brown/90 absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center mx-auto flex-col'>
                      <h1 className='text-6xl w-[200px] text-center font-custom font-semibold text-white mb-14'>Contact Us</h1>
                      <p className='text-white font-Karla text-2xl mb-2 font-semibold'>Booking Request</p>
                      <p className='text-[#F4CE14] font-Karla text-5xl mb-14 tracking-wider'>+21261626364</p>
                      <p className='text-white font-Karla text-3xl font-semibold'>Location</p>
                      <p className='text-white/80 font-Karla w-60 text-[17px] text-center mb-5 mt-2 font-semibold'>Restaurant St, Delicious City, Casablanca 20020, Morocco</p>
                      <p className='text-white font-Karla text-3xl font-semibold'>Lunch Time</p>
                      <p className='text-white/80 font-Karla w-[200px] text-[18px] text-center mb-5 mt-2 tracking-wider font-semibold'>Monday to Sunday 11.00am - 2.30pm </p>
                      <p className='text-white font-Karla text-3xl font-semibold'>Dinner Time</p>
                      <p className='text-white/80 font-Karla w-[200px] text-[18px] text-center mb-5 mt-2 tracking-wider font-semibold'>Monday to Sunday 05.00pm - 10.00pm  </p>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Booking;