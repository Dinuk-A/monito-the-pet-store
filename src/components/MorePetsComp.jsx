import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MorePetsComp = () => {
  const [pets, setPets] = useState([]);

  //IN MORE DOGS SECTION , SHOW ONLY RANDOM 4 DOGS CARDS (AS SHOWN IN FIGMA)
  const [randomPets, setRandomPets] = useState([]);
  const navigate = useNavigate();

  // GET THE PET LIST
  const getPetsInfo = () => {
    axios
      .get("https://monitor-backend-rust.vercel.app/api/pets")
      .then((res) => {
        setPets(res.data);

        //SELECT AND STORE 4 RANDOM DOGS FROM ABOVE FETCHED LIST(AS SHOWN IN FIGMA)
        getRandomPets(res.data);
      })
      .catch((err) => console.log(err));
  };

  // FN TO SELECT 4 RANDOM DOGS TO SHOW 
  const getRandomPets = (petsList) => {
    //SHUFFLE PETS IN A RANDOM ORDER
    const shuffled = petsList.sort(() => 0.5 - Math.random());

    //GET THE 1ST 4 ELEMENTS
    const selectedPets = shuffled.slice(0, 4);
    setRandomPets(selectedPets);
  };

  // ALWAYS RUN WHEN PAGE LOADS
  useEffect(() => {
    getPetsInfo();
  }, []);

  /* NOTE : ORIFGINALLY EACH CARD CLICK SHOULD BE NAVIGATED TO A PAGE 
            WHERE IT SHOWS THAT PARTICULAR PET'S DETAILS,,,BUT SINCE THIS API'S DATA DOESNT INCLUDE SOME INFORMATION LIKE SIZE,COLOUR,..ETC (AS SHOWN IN FIGMA'S 3RD IMAGE) I MANUALLY CREATED 50 FAKE DOGS OBJECTS AND STORED THEM IN 'pet' DIRECTIORY
            
            PLEASE CLICK 'Category' OR 'View More' BUTTON */

  const handleCardClick = (id) => {
    alert("PLEASE CLICK 'View More' BUTTON OR READ THE COMMENTS")

    //THIS IS HOW IT SHOULD BE ORIGINALLY
    // navigate(`/pet/${id}`); 
  };

  const handleViewMoreClick = () => {
    navigate('/pet');
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

      {/* SHOW RANDOM 4 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {randomPets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => handleCardClick(pet.id)}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] cursor-pointer"
          >
            <img
              src={pet.image } 
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
