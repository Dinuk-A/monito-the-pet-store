import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DefaultPetsShowComp = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  // Fetch the pets list
  const getPetsInfo = () => {
    axios.get("https://monitor-backend-rust.vercel.app/api/pets")
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  };

  // Always run when the page loads
  useEffect(() => {
    getPetsInfo();
  }, []);

  // Handle click on the dog card to navigate to its details
  const handleCardClick = (id) => {
    navigate(`/pet/${id}`); // Navigates to the dog details page
  };

  // Handle click on the 'View More' button to navigate to the Dog page
  const handleViewMoreClick = () => {
    navigate('/pet');
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <p className="text-sm">What's new?</p>
      <div className="flex justify-between items-start">
        <p className="text-lg">Take a look</p>
        {/* Updated button with click handler */}
        <button 
          onClick={handleViewMoreClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          View More
        </button>
      </div>

      {/* Render pet cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {pets.map(pet => (
          <div
            key={pet.id}
            onClick={() => handleCardClick(pet.id)} 
            className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] cursor-pointer"
          >
            <img
              src={pet.image || '/path/to/default-image.jpg'} 
              alt={pet.breed}
              className="w-full h-[70%] object-contain"
            />
            <div className="p-2 flex flex-col h-[30%]">
              <h2 className="text-xl font-semibold">{pet.id} - {pet.breed}</h2>
              <p className="text-gray-700">Gender - {pet.gender} , Age - {pet.age}</p>
              <p className="text-gray-700 font-bold">{pet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefaultPetsShowComp;
