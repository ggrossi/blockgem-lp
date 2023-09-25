function LeftSection() {
    return (
      <div className="flex flex-col p-4 md:p-0 md:m-8 font-sans w-full" style={{ fontFamily: 'League Spartan' }}>
        <h1 className="text-1xl md:text-1xl font-bold overflow-hidden pb-8">💎 BLOCKGEM</h1>
        <h2 className="text-5xl md:text-6xl font-extrabold overflow-hidden">Unlock the Power of Crypto Arbitrage</h2>
        <p className="text-lg mt-4 overflow-hidden">Our innovative Telegram bot covers <span className="font-bold">over 100+ crypto assets and providing real-time prices from 75+ DEXes and CEXes</span>.</p>
        <p className="text-lg mt-4 overflow-hidden">Subscribe now to elevate your trading experience with our exclusive, user-friendly features!</p>
        <input type="email" placeholder="Your Best Email" className="mt-4 p-2 rounded-md w-full text-zinc-400" />
        <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:flex-1">Launch Telegram Bot</button>
          <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:flex-1">Join Telegram Channel</button>
        </div>
      </div>
    );
  }
  
  export default LeftSection;
  