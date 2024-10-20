import React from 'react';
import { useParams } from 'react-router-dom';
import { useDogs } from '../components/DogContext'; // Import the context hook

const PetDetails = () => {
  const { id } = useParams();
  const dogs = useDogs(); // Get dogs from context
  const dog = dogs.find(d => d.id === parseInt(id)); // Find the dog by ID

  if (!dog) {
    return <div>Dog not found</div>; // Handle case where dog is not found
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{dog.name}</h2>
      <img src={dog.images[0]} alt={dog.name} className="w-full h-60 object-cover mb-4" />
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p><strong>Gender:</strong> {dog.gender}</p>
      <p><strong>Color:</strong> {dog.color}</p>
      <p><strong>Price:</strong> ${dog.price}</p>
      <p><strong>SKU:</strong> {dog.SKU}</p>
      <p><strong>Age:</strong> {dog.age}</p>
      <p><strong>Vaccinated:</strong> {dog.vaccinated}</p>
      <p><strong>Dewormed:</strong> {dog.dewormed}</p>
      <p><strong>Microchip:</strong> {dog.microchip}</p>
      <p><strong>Location:</strong> {dog.location}</p>
      <p><strong>Published Date:</strong> {dog.publishedDate}</p>
      <p><strong>Additional Information:</strong> {dog.additionalInfo}</p>
    </div>
  );
};

export default PetDetails;
