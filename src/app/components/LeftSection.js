'use client'
import React, { useRef, useState } from 'react';

function LeftSection() {
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const subscribeAndRedirect = async (e, redirectUrl) => {
    e.preventDefault();
    const email = emailRef.current.value;
    try {
      const res = await fetch('/api/subscribeUser', {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      
      if (res.status === 200) {
        setErrorMessage(''); // Clear any previous error messages
        
        // Insert Twitter conversion tracking event code before redirecting
        if (window.twq) {
          window.twq('event', 'tw-ofnig-ogmul', {
            email_address: email // use this to pass a user’s email address
          });
        }
        
        window.location.href = redirectUrl; // Redirect to the respective Telegram link
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Something went wrong!');
      }
    } catch (error) {
      setErrorMessage('An error occurred while subscribing!');
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-0 md:m-8 font-sans w-full" style={{ fontFamily: 'League Spartan' }}>
      <h1 className="text-1xl md:text-1xl font-bold overflow-hidden pb-8">💎 BLOCKGEM</h1>
      <h2 className="text-5xl md:text-6xl font-extrabold overflow-hidden">Unlock the Power of Crypto Arbitrage</h2>
      <p className="text-lg mt-4 overflow-hidden">Our innovative Telegram bot covers <span className="font-bold">over 100+ crypto assets and providing real-time prices from 75+ DEXes and CEXes</span>.</p>
      <p className="text-lg mt-4 overflow-hidden">Subscribe now to elevate your trading experience with our exclusive, user-friendly features!</p>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form>
        <input type="email" placeholder="Your Best Email" className="mt-4 p-2 rounded-md w-full text-zinc-400" ref={emailRef} required />
        <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button onClick={(e) => subscribeAndRedirect(e, 'https://t.me/blockgemarb_bot')} className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:flex-1">Launch Telegram Bot</button>
          <button onClick={(e) => subscribeAndRedirect(e, 'https://t.me/+MViTUDTB845hYzIx')} className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:flex-1">Join Telegram Channel</button>
        </div>
      </form>
    </div>
  );
}

export default LeftSection;
