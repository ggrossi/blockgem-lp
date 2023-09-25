function LeftSection() {
    return (
      <div className="flex flex-col p-4 md:p-0 md:m-8 font-sans w-full" style={{ fontFamily: 'League Spartan' }}>
        <h1 className="text-5xl md:text-9xl font-extrabold overflow-hidden">Headline</h1>
        <p className="text-lg mt-4 overflow-hidden">Subline</p>
        <input type="email" placeholder="Email" className="mt-4 p-2 rounded-md w-full" />
        <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
          <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto md:w-48">Launch Telegram Bot</button>
          <button className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto md:w-48">Join Telegram Channel</button>
        </div>
      </div>
    );
  }
  
  export default LeftSection;
  