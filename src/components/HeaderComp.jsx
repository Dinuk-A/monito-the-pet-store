import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import monito_logo from "../assets/images/logo.png";

const HeaderComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);  // To handle mobile search icon click

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  };

  return (
    <nav className="py-4 bg-[#f4e3c9] sm:pb-16 lg:pb-4 ">
      <div className="container mx-auto flex items-center justify-between">

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer} className="text-2xl text-[#072D50]">
            <FaBars />
          </button>
        </div>

        {/* Logo, centered on mobile */}
        <div className="flex items-center justify-center lg:justify-start flex-1">
          <Link to="/homepage"> {/* Use Link to navigate to /homepage */}
            <img src={monito_logo} alt="logo" className="h-10 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Search Icon */}
        <div className="lg:hidden">
          {isSearchActive ? (
            <input
              type="text"
              placeholder="Search..."
              className="w-48 px-4 py-2 rounded-full text-sm focus:outline-none"
            />
          ) : (
            <button onClick={toggleSearch} className="text-2xl text-[#072D50]">
              <FaSearch />
            </button>
          )}
        </div>

        {/* Full menu on larger screens */}
        <ul className="hidden lg:flex space-x-8 text-[#072D50] text-lg">
          <li><Link to="/homepage" className="font-bold text-blue-900 hover:text-[#FFA500]">Home</Link></li>
          <li><Link to="/dog" className="font-bold hover:text-[#FFA500]">Category</Link></li> {/* Update link to /dog */}
          <li><a href="/about" className="font-bold hover:text-[#FFA500]">About</a></li>
          <li><a href="/contact" className="hover:text-[#FFA500] font-bold">Contact</a></li>
        </ul>

        {/* Search input on larger screens with icon inside */}
        <div className="hidden lg:flex items-center space-x-2 bg-white rounded-full shadow-md pl-4">
          <FaSearch className="text-[#072D50]"/>
          <input
            type="text"
            placeholder="Search something here!"
            className="w-72 px-4 py-2 rounded-l-full text-sm focus:outline-none"
          />
        </div>

        {/* Space between search and Join community */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="bg-[#072D50] text-white px-4 py-2 rounded-full hover:bg-[#091A3C]">
            Join the community
          </button>
          <select className="bg-transparent text-[#072D50] text-lg font-medium focus:outline-none cursor-pointer">
            <option value="vnd" className="text-black">VND</option>
            <option value="usd" className="text-black">USD</option>
            <option value="eur" className="text-black">EUR</option>
          </select>
        </div>

        {/* Drawer for mobile menu */}
        <div className={`fixed top-0 left-0 w-full h-full bg-[#f4e3c9] z-50 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
          <div className="flex justify-between p-4">
            <button onClick={toggleDrawer} className="text-2xl text-[#072D50]">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-4 text-[#072D50] text-lg">
            <li><Link to="/homepage" className="font-bold text-blue-900 hover:text-[#FFA500]">Home</Link></li>
            <li><Link to="/dog" className="font-bold hover:text-[#FFA500]">Category</Link></li> {/* Update link to /dog */}
            <li><a href="/about" className="font-bold hover:text-[#FFA500]">About</a></li>
            <li><a href="/contact" className="font-bold hover:text-[#FFA500]">Contact</a></li>
            <button className="bg-[#072D50] text-white px-4 py-2 rounded-full hover:bg-[#091A3C]">
              Join the community
            </button>
            <select className="bg-transparent text-[#072D50] text-lg font-medium focus:outline-none cursor-pointer">
              <option value="vnd" className="text-black">VND</option>
              <option value="usd" className="text-black">USD</option>
              <option value="eur" className="text-black">EUR</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComp;
