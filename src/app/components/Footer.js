function Footer() {
  return (
    <div className="bg-neutral-950 text-gray-500 p-4 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Blockgem. All Rights Reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com/blockgemco" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
          <a href="https://0xgus.notion.site/Privacy-Policy-for-Blockgem-2f097c084af1473589fa5421716e3a2d?pvs=4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
