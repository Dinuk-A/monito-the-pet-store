import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import monito_logo from "../assets/images/logo.png";

const FooterComp = () => {
  return (

    <footer className="bg-[#F4EAD2] text-center pt-10 mt-8 pb-6">

      {/* SUBSCRIPTION CONTAINER */}
      <div className="bg-[#062C50] text-white p-6 rounded-lg mx-auto max-w-md sm:max-w-4xl flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-lg text-start font-semibold mb-4 sm:mb-0">Register Now So You Don't Miss Our Programs</h2>
        <div className="flex flex-col bg-white rounded-2xl sm:flex-row sm:items-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="px-4 py-2 rounded-2xl text-black w-full sm:w-96 mb-4 sm:mb-0 sm:mr-4"
          />
          <button className="bg-[#062C50] text-white px-6 my-1 me-2 rounded-2xl w-full sm:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* SUBSCRIPTION CONTAINER ENDS*/}

      {/* Menu Links and Social Media Icons */}
      <div className="flex justify-between items-center mt-10 mb-6 px-12">

        {/* MENU LINKS */}
        <div className="flex space-x-8">
          <a href="/homepage" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/pet" className="text-gray-600 hover:text-gray-900">Category</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>

        {/*SOCIAL MEDIA ICONS */}
        <div className="flex space-x-6 ml-auto">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaYoutube />
          </a>
        </div>
        {/* SOCIAL MEDIA ICONS ENDS*/}
      </div>

      {/* HR TO DEVIDE */}
      <hr className="my-4 w-full sm:w-1/2 mx-auto border-gray-300" />

      {/* LAST SECTION */}
      <div className="flex justify-between items-center px-4">
        <p className="text-gray-600">© 2022 Monito. All rights reserved.</p>
        <img src={monito_logo} alt="Monito Logo" className="h-8" />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
