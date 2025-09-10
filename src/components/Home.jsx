import React, { useState } from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import trophy from "../assets/trophy.svg";
import iphoneMessage from "../assets/iphoneMessage.svg";
import exerciseDatabaseImage from "../assets/exerciseDatabaseImage.svg";
import { useNavigate } from "react-router-dom";



function Home() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Exercises",
      description: "Pick the right exercise for your client",
      logo: trophy,
      image: exerciseDatabaseImage,
      path: "/Exercises"
    },
    {
      id: 2,
      title: "Program Builder",
      description: "Customized programs for your clients",
      logo: trophy,
      image: exerciseDatabaseImage,
      path: "/Exercises"
    },
    {
      id: 3,
      title: "Progress Tracking",
      description: "Track exercise progression",
      logo: trophy,
      image: iphoneMessage,
      path: "/Exercises"
    },
    {
      id: 4,
      title: "Messaging",
      description: "Send real-time messages with videos & photos",
      logo: trophy,
      image: iphoneMessage,
      path: "/Exercises"
    },
  ];

  const cardNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header/>
      <div className="relative w-full h-200 overflow-hidden mt-20">
        {/* YouTube Video Background */}
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/JxRnueT6wHs?autoplay=1&mute=1&loop=1&playlist=JxRnueT6wHs&controls=0&modestbranding=1&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col gap-10">
          <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center gap-10">
            <h1 className="text-5xl font-bold [font-family:Inter,sans-serif]">
              Stronger Starts Here - Let Us Help You Find The Right Exercise
            </h1>
            <h2 className="text-xl font-bold [font-family:Inter,sans-serif]">
              Find the right exercises for your clients anytime, anywhere—making
              training simple and effective.
            </h2>
            <div className="flex flex-row gap-5 mt-10 mb-20">
              <input className="bg-white rounded-3xl p-2 text-black w-80 outline-black" />
              <button className="bg-blue-500 text-white rounded-full py-2 px-6 hover:bg-blue-700">
                START 30-DAY FREE TRIAL
              </button>
            </div>
          </div>
        </div>
      </div>

       {/*Who uses the products */}
      <div className="flex flex-row justify-evenly flex-wrap h-50 items-center">
        <h1 className="text-5xl font-bold [font-family:Inter,sans-serif] text-[#b48e43]">AT Athlete</h1>
        <h1 className="text-5xl font-bold [font-family:Inter,sans-serif] text-[#b48e43]">TriForce</h1>
        <h1 className="text-5xl font-bold [font-family:Inter,sans-serif] text-[#b48e43]">AT Athlete</h1>
        <h1 className="text-5xl font-bold [font-family:Inter,sans-serif] text-[#b48e43]">TriForce</h1>
      </div>


      <div className="bg-blue-50 h-auto w-80% flex flex-row justify-evenly gap-30">
        <div className="w-3xl">
          <h1 className="text-5xl font-bold [font-family:Inter,sans-serif] p-6 tracking-normal leading-15">
            All the Exercises and Resources You Need to Guide Your Clients to
            Success
          </h1>
          <p className="pl-6 text-xl font-medium [font-family:Inter,sans-serif]">
            Discover the perfect exercise for your workout—customized,
            optimized, and refined to elevate your training.
          </p>

          <div className="mt-6 pl-6">
            <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-x-100 gap-y-6">
              {/* ✅ Fixed navigation logic */}
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-gray-50 border border-black p-4 rounded-lg shadow-md cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 w-75 h-32 flex flex-col justify-evenly items-start mb-6"
                  onMouseEnter={() => setSelectedCard(card)}
                  onMouseLeave={() => setSelectedCard(card)}
                  onClick={() => cardNavigation(card.path)}
                >
                  <img src={card.logo} alt={card.title} className="w-auto h-6" />
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="w-1/2 pt-6 flex justify-center items-center">
          {/* Right Side: Display Info */}
          {selectedCard ? (
  <div>
    <img src={selectedCard.image} alt={selectedCard.title} className="w-auto h-auto pr-6" />
  </div>
) : (
    <img src={cards[1].image} alt={cards[1].title} className='w-auto h-auto pr-6' />
)}

        </div>
      </div>

{/*Add Extra information, maybe some manual workouts? */}
<div className="h-100 flex justify-center items-center">
  <h1 className="text-5xl font-bold [font-family:Inter,sans-serif]">This will be where free workouts or workshops or blogs will be!</h1>
</div>

        {/* Email List? */}
<div className="h-100 bg-gradient-to-r from-[#13a89e] to-[#e4c775] p-8 text-white flex flex-col justify-center items-center ">
  <h1 className="text-3xl font-bold mb-4">Try Exercise DB Today</h1>
  <h2 className="text-xl mb-6">Already at the gym? Find your next exercise before your rest is up.</h2>
  <div className="mb-6 ">
    <ul className="list-disc pl-6 flex flex-row justify-evenly gap-16">
      <li>Train 5 clients for free</li>
      <li>No credit card required</li>
    </ul>
  </div>
  <form className="flex gap-4">
    <input 
      className="p-2 rounded-md border-none outline-none focus:ring-2 focus:ring-[#13a89e] text-black w-full max-w-xs"
      placeholder="Enter your email"
    />
    <button className="bg-[#13a89e] text-white py-2 px-6 rounded-md hover:bg-[#e4c775] transition duration-300">
      Try for free
    </button>
  </form>
</div>




      <Footer />
    </>
  );
}

export default Home;
