import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src="/whiteLogo-removebg-preview.png" alt="Logo" className="w-[50px] h-[50px] mr-3" /> */}
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8 font-montserrat">
          <a href="/" className="text-gray-700 hover:text-yellow-600 no-underline font-thin">Home</a>
          <a href="/productpage" className="text-gray-700 hover:text-yellow-600 no-underline font-thin">Shop</a>
          <a href="/about" className="text-gray-700 hover:text-yellow-600 no-underline font-thin">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-yellow-600 no-underline font-thin">Contact</a>
          <a href="/cart" className="text-gray-700 hover:text-yellow-600 no-underline font-thin">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;