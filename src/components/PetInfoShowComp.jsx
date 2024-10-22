import React from 'react';
import { useParams } from 'react-router-dom';

//IMPORT THE CUSTOM HOOK TO CONSUME dogs DATA
import { useDogs } from './PetContext';
import Customers from './CustomersComp';
import Footer from './FooterComp';
import MorePetsComp from './MorePetsComp';
import Header from './HeaderComp';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const PetDetails = () => {

  //EXTRACT 'id' FROM URL
  const { id } = useParams();

  //USE THE IMPORTED HOOK TO GET dogs LIST
  const dogs = useDogs();

  //FIND THE SPECIFIC DOG FROM THAT LIST USING THE 'id'
  const dog = dogs.find(d => d.id === parseInt(id));

  //IF NO RESULTS FOUND FOR GIVEN ID
  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <>
      {/* HEADER COMP */}
      <Header></Header>
      {/* HEADER COMP ENDS*/}

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* STATIC BREAD CRUMS */}
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
        {/* STATIC BREAD CRUMS ENDS*/}

        {/* DOG INFO DISPLAY CONTAINER */}
        <div className="flex flex-col lg:flex-row lg:space-x-10">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2">

            {/* IMAGE / CAROUSAL SECTION */}
            <div className="relative w-full h-96 mb-4">
              <img src={dog.gender === "Male" ? dog.images[0] : dog.images[1]} alt={dog.name} className="w-full h-full object-cover rounded-md" />
            </div>

            {/* SMALL IMGS */}
            <div className="flex space-x-2 overflow-x-auto">
              {dog.images.slice(1).map((image, index) => (
                <img key={index} src={image} alt={dog.name} className="w-20 h-20 object-cover rounded-md" />
              ))}
            </div>
            {/* IMAGE / CAROUSAL SECTION ENDS*/}

            {/* GUARANTEE SECTION / HARDCODED */}
            <div className="mt-4 space-y-2">
              <div className="bg-yellow-100 p-2 rounded-md flex items-center justify-start">
                <span className="text-s font-semibold"> 🐕‍🦺 100% health guarantee for pets</span>
              </div>
              <div className="bg-yellow-100 p-2 rounded-md flex items-center justify-start">
                <span className="text-s font-semibold"> 🐶 100% guarantee of pet identification</span>
              </div>
            </div>
            {/* GUARANTEE SECTION ENDS */}
            
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
          {/* LEFT SIDE ENDS*/}

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2">

            {/* NAME AND PRICE */}
            <h2 className="text-3xl font-bold mb-2">{dog.name}</h2>
            <p className="text-2xl text-blue-600 font-semibold mb-4">{dog.price.toFixed(3)} VND</p>
            {/* NAME AND PRICE ENDS*/}

            {/* 2 BTNS */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-700">Contact us</button>
              <button className="border-4 border-blue-950
             text-blue-800 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">
                Chat with Monito
              </button>
            </div>
            {/* 2 BTNS ENDS*/}

            {/* DOG INFO MAIN TABLE */}
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
            {/* DOG INFO MAIN TABLE ENDS */}

          </div>
          {/* RIGHT SIDE ENDS*/}

        </div>
        {/* DOG INFO DISPLAY CONTAINER ENDS*/}

      </div>

      {/* CUSTOMERS */}
      <Customers></Customers>

      {/* MORE PUPPIES */}
      <MorePetsComp></MorePetsComp>

      {/* FOOTER */}
      <Footer></Footer>
    </>
  );
};

export default PetDetails;
