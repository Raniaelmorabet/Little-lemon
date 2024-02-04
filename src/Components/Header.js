import pizza2 from "../Images/Header/pizza2.jpg";
import anime from "../Images/About/anime.png";

function Header() {

    return (
        <header className="flex bg-dark-brown">
            <div className="w-25 h-719 bg-light-brown rounded-br-[50px] z-10">
                <img src={anime}  alt="anime" id='anime' className= "absolute w-25 h-[689px] opacity-70 "/>
                <h2 id='headerT' className="font-custom text-[#F4CE14] font-bold text-5xl relative left-[22px] top-16">Little Lemon <br></br> Morocco</h2>
                <p  id='headerP' className="font-Karla text-zinc-300 leading-loose relative left-[22px] flex col-auto top-24">
                    Discover the best of Mediterranean cuisine <br></br> with a modern twist at our
                    family-owned <br></br> restaurant in Casablanca. Our carefully <br></br> crafted menu combines
                    traditional recipes
                    <br></br>with innovative flair, offering a dining experience <br></br>that transcends boundaries.
                    Join us for a warm <br></br> and welcoming atmosphere . where every <br></br>occasion is made
                    memorable by our attentive <br></br> staff.Come, indulge in the vibrant flavors of the Mediterranean,
                    reimagined for today.</p>
                <button id='headerButton' className="font-Karla w-[250px] h-[60px] bg-[#F4CE14] rounded-3xl relative top-30 font-semibold text-2xl top-36 left-[22px] shadow-lg shadow-black/50 z-30 overflow-hidden">Reserve a Table</button>
            </div>
            <img src={pizza2} alt="pizza" className="ml-auto w-[1323px] absolute left-[357px] h-[719px] "/>
        </header>
    );
}

export default Header;