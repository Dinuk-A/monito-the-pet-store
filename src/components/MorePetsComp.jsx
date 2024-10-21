import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MorePetsComp = () => {
  const [pets, setPets] = useState([]);
  const [randomPets, setRandomPets] = useState([]); // To store the random 4 pets
  const navigate = useNavigate();

  // Fetch the pets list
  const getPetsInfo = () => {
    axios
      .get("https://monitor-backend-rust.vercel.app/api/pets")
      .then((res) => {
        setPets(res.data);
        getRandomPets(res.data); // Randomly pick 4 pets after data is fetched
      })
      .catch((err) => console.log(err));
  };

  // Randomly select 4 pets from the list
  const getRandomPets = (petsList) => {
    const shuffled = petsList.sort(() => 0.5 - Math.random()); // Shuffle the pets
    const selectedPets = shuffled.slice(0, 4); // Select the first 4 pets from the shuffled array
    setRandomPets(selectedPets);
  };

  // Always run when the page loads
  useEffect(() => {
    getPetsInfo();
  }, []);

  // Handle click on the dog card to navigate to its details
  const handleCardClick = (id) => {
    navigate(`/dog/${id}`); // Navigates to the dog details page
  };

  // Handle click on the 'View More' button to navigate to the Dog page
  const handleViewMoreClick = () => {
    navigate('/dog');
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <p className="text-sm">What's new?</p>
      <div className="flex justify-between items-start">
        <p className="text-lg">Take a look</p>
        <button 
          onClick={handleViewMoreClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          View More
        </button>
      </div>

      {/* Render randomly selected pet cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {randomPets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => handleCardClick(pet.id)} 
            className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] cursor-pointer"
          >
            <img
              src={pet.image || '/path/to/default-image.jpg'} // Display dog image or default
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

export default MorePetsComp;
