'use client';

import React, { useState } from "react";
import Image from "next/image";
import './home.css';
import About from "../about/page";



const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
    <div className='homePage'>
      <video className='homeVideo' autoPlay muted loop>
        <source src="image/ipl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='container'>
        <div className='textContent'>
          <div className='card'>
            <h1>Ready for IPL 2025 with Reddy Anna Book!</h1>
            <p className='summary'>
              The top cricket players worldwide will gather on one platform in IPL 2025. For cricket enthusiasts, the
              2025 IPL is expected to be an exciting journey of thrill, competition, and promoting new talent that makes
              all the difference. Multiple competitive teams are expected to compete for the trophy in the tournament.
              Innovations such as enhanced analytics for players, fan interaction programs, and digital broadcasting
              will redefine the experience at IPL.
            </p>
            {showDetails && (
              <p className='details'>
                One of the main events will be the IPL 2025 auction, where teams come together to assemble teams with a
                mix of established players and emerging talent. Advanced decision-making technology including
                AI-powered analytics along with real-time tracking of player performances also adds to the excitement.
                <br />
                <br />
                Online cricket betting is one of the attractions a cricket enthusiast would look for in IPL as the game
                gets newer and newer with time. Cricket Online ID also provides an opportunity to start cricket betting.
              </p>
            )}
            <button onClick={toggleDetails} className='btnCustom'>
              {showDetails ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
       
     
      <div className='imageContent'>
      <Image src="/image/imgipl.png" alt="IPL 2025 Highlights" width={400} height={300} className='image' />
      {/* Now include the About Component below or wherever you want it */}
  {/* Here it will render the About section below your content */}
    </div>
    </div>
    </div>
   
   
    <div className="about-section flex flex-col items-center text-center px-5 py-12">
      <div className="about-card bg-transparent rounded-xl shadow-xl backdrop-blur-md p-8 max-w-3xl mb-8 animate-fadeIn">
        <h2 className="text-4xl text-white mb-6">How to Start Cricket Betting with Cricket Online ID</h2>
        <p className="text-lg leading-relaxed mb-6 text-white">
          Cricket betting is an activity that has become the most liked by fans who wish to add another exciting layer to IPL matches. Platforms such as <strong>Reddy Anna Book</strong> have made it easier than ever to place bets on IPL 2025 using the cricket betting ID. Follow these simple steps:
        </p>
        <ul className="steps-list text-left  list-disc list-inside">
          <li className="text-lg text-white  mb-3">
            <strong className="text-orange-600">Step 1:</strong> Visit Reddy Anna Book and sign up to receive your unique cricket betting ID. The process is quick and requires basic details.
          </li>
          <li className="text-lg mb-3 text-white">
            <strong className="text-orange-600">Step 2:</strong> Once your account is verified, deposit funds using secure payment methods such as UPI, net banking, or digital wallets.
          </li>
          <li className="text-lg mb-3 text-white">
            <strong className="text-orange-600">Step 3:</strong> Explore a wide range of betting options, including match-winner bets, top batsmen, highest wicket-taker, and live in-play betting.
          </li>
          <li className="text-lg mb-3 text-white">
            <strong className="text-orange-600">Step 4:</strong> Analyze team performance, track player statistics, and place your bets accordingly with real-time odds provided by Reddy Anna Book.
          </li>
          <li className="text-lg mb-3 text-white">
            <strong className="text-orange-600 text-white">Step 5:</strong> After winning bets, withdraw your earnings instantly through hassle-free transaction methods.
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6 text-white">
          With an intuitive interface and 24/7 customer support, <strong>Reddy Anna Book</strong> ensures a seamless betting experience for IPL enthusiasts.
        </p>
        <a href="#" className="btn-custom bg-orange-600 rounded-full font-bold py-2 px-6 shadow-lg hover:bg-orange-700 text-white">Start Betting Now</a>
      </div>

      
    </div>
        {/* -------------------------------------------------------------------------- */}
      
        <About/>

    </div>


  );
};

export default Home;
