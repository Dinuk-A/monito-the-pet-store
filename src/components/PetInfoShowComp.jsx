import React from 'react';
import { useParams } from 'react-router-dom';
import { useDogs } from './PetContext'; // Custom hook to get dog data
import Customers from './CustomersComp';
import Footer from './FooterComp';
import ProductShowComp from './MorePetsComp';
import Header from './HeaderComp';

const PetDetails = () => {
  const { id } = useParams();
  const dogs = useDogs();
  const dog = dogs.find(d => d.id === parseInt(id));

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <>
      {/* header */}
      <Header></Header>

      {/* main component */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <nav className="flex space-x-2">
            <a href="#" className="hover:text-blue-600">Home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-blue-600">Dog</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-blue-600">{dog.breed}</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-blue-600">{dog.name}</a>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-10">

          {/* Left Side (Images Section) */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-96 mb-4">
              <img src={dog.images[0]} alt={dog.name} className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Small images */}
            <div className="flex space-x-2 overflow-x-auto">
              {dog.images.slice(1).map((image, index) => (
                <img key={index} src={image} alt={dog.name} className="w-20 h-20 object-cover rounded-md" />
              ))}
            </div>

            {/* Guarantees Section */}
            <div className="mt-4 space-y-2">
              <div className="bg-yellow-100 p-2 rounded-md flex items-center justify-start">
                <span className="text-s font-semibold"> 🐕‍🦺 100% health guarantee for pets</span>
              </div>
              <div className="bg-yellow-100 p-2 rounded-md flex items-center justify-start">
                <span className="text-s font-semibold"> 🐶 100% guarantee of pet identification</span>
              </div>
            </div>


            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4 sm:hidden" >
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Side (Details Section) */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-2">{dog.name}</h2>
            <p className="text-2xl text-blue-600 font-semibold mb-4">{dog.price.toFixed(3)} VND</p>

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-700">Contact us</button>
              <button className="border-4 border-blue-950
             text-blue-800 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">
                Chat with Monito
              </button>
            </div>

            {/* Information Table */}
            <div className="bg-white rounded-md shadow-md p-4">
              <table className="w-full text-sm text-left text-gray-500">
                <tbody>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">SKU</th>
                    <td className="py-2 px-4">: {dog.SKU}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Gender</th>
                    <td className="py-2 px-4">: {dog.gender}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Age</th>
                    <td className="py-2 px-4">: {dog.age} Months</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Size</th>
                    <td className="py-2 px-4">: {dog.size}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Color</th>
                    <td className="py-2 px-4">: {dog.color}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Vaccinated</th>
                    <td className="py-2 px-4">: {dog.vaccinated}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Dewormed</th>
                    <td className="py-2 px-4">: {dog.dewormed}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Cert</th>
                    <td className="py-2 px-4">: {dog.cert}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Microchip</th>
                    <td className="py-2 px-4">: {dog.microchip}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Location</th>
                    <td className="py-2 px-4">: {dog.location}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Published Date</th>
                    <td className="py-2 px-4">: {dog.publishedDate}</td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4 text-gray-600 font-semibold">Additional Information</th>
                    <td className="py-2 px-4">: {dog.additionalInfo}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      {/* customers */}
      <Customers></Customers>

      {/* more puppies */}
      <ProductShowComp></ProductShowComp>

      {/* footer */}
      <Footer></Footer>
    </>
  );
};

export default PetDetails;
