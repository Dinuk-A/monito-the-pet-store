import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F4EAD2] text-center pt-10 mt-8 pb-6">
      {/* Subscribe Section */}
      <div className="bg-[#062C50] text-white p-6 rounded-lg mx-auto max-w-md sm:max-w-4xl">
        <h2 className="text-lg font-semibold mb-4">Register Now So You Don't Miss Our Programs</h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="px-4 py-2 rounded-full text-black w-full sm:w-96"
          />
          <button className="bg-[#062C50] text-white px-6 py-2 rounded-full sm:w-auto w-full">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center space-x-8 mt-10 mb-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Category</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Footer Branding */}
      <div className="mb-6">
        <img src="logo_url" alt="Monito Logo" className="mx-auto h-8" /> {/* Update with your logo */}
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center text-gray-600">
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        </div>
        <p className="mt-2">© 2022 Monito. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
