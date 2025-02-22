"use client"

import React, { useState } from 'react';
import Image from 'next/image';
// import cricketImage from 'public/image/cricket_betting_faq.jpg';

const FAQ = () => {
  const [faqState, setFaqState] = useState({});

  const toggleFaq = (index) => {
    setFaqState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqItems = [
    {
      question: "How do I get started betting on the IPL?",
      answer:
        "You can start placing bets on the Indian Premier League through Reddy Anna Book by creating an account, adding money, and scouting for open markets to bet.",
    },
    {
      question: "What types of bets are there on IPL matches?",
      answer: (
        <ul>
          <li><strong>Match Winner:</strong> Predict which team will win.</li>
          <li><strong>Top Batsman/Bowler:</strong> Bet on the top batsman or bowler in terms of runs scored or wickets taken.</li>
          <li><strong>Runs Scored:</strong> Estimate how many runs will be scored overall in a game.</li>
          <li><strong>Live Bets:</strong> Bets can be placed live as the game is happening.</li>
        </ul>
      ),
    },
    {
      question: "How can I pay in and take out money?",
      answer:
        "Reddy Anna Book accepts secure payment options like digital wallets, net banking, and UPI. Withdrawals are processed immediately, ensuring seamless transactions.",
    },
    {
      question: "Is it safe to bet on the Indian Premier League on Reddy Anna Book?",
      answer:
        "Reddy Anna Book ensures safe transactions, encrypted data, and fair odds for betting.",
    },
    {
      question: "Can one place a bet on live IPL matches?",
      answer:
        "Yes, live betting allows you to place bets during a game, thus making it dynamic and interesting.",
    },
  ];

  return (
    <div className="faq flex flex-col md:flex-row items-start justify-between p-8 gap-8 bg-transparent text-white">
      <div className="faq-card bg-transparent rounded-xl shadow-xl p-8 max-w-xl flex-1">
        <h2 className="text-4xl text-orange-500 mb-6">About Us - Frequently Asked Questions (FAQs)</h2>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="faq-item cursor-pointer mb-4 p-4 border-b border-gray-700 hover:bg-gray-800"
            onClick={() => toggleFaq(index)}
          >
            <p className="font-bold text-lg">{item.question}</p>
            {faqState[index] && (
              <div className="faq-answer mt-4 text-base">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="image-content flex-1 text-center">
        <Image
          src="/image/imgipl.png" alt='ipl'
          
          width={400} height={300}
        />
      </div>
    </div>
  );
};

export default FAQ;
