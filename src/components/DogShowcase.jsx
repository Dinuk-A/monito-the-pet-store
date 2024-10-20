import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDogs } from '../components/DogContext'; // Import the context hook

const DogShowcase = () => {
  const dogs = useDogs(); // Get dogs from context
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // states for filters and sorting
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [sortOption, setSortOption] = useState('popular');

  // Filter logic based on selected criteria
  const filteredDogs = dogs.filter((dog) => {
    const genderMatch = selectedGender ? dog.gender === selectedGender : true;
    const colorMatch = selectedColor ? dog.color === selectedColor : true;
    const priceMatch =
      (minPrice ? dog.price >= minPrice : true) &&
      (maxPrice ? dog.price <= maxPrice : true);
    const breedMatch = selectedBreed ? dog.breed.includes(selectedBreed) : true;
    return genderMatch && colorMatch && priceMatch && breedMatch;
  });

  // Sorting logic based on selected option
  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price; // Sort by price (ascending)
    }
    return a.id - b.id; // Default sort by 'popular' (ID or any other criteria)
  });

  const totalPages = Math.ceil(sortedDogs.length / itemsPerPage);

  // Get displayed dogs based on current page
  const displayedDogs = sortedDogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedGender('');
    setSelectedColor('');
    setMinPrice('');
    setMaxPrice('');
    setSelectedBreed('');
    setSortOption('popular');
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      {/* Left Sidebar for Filters */}
      <div className="lg:w-1/4 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Filter Dogs</h2>
        {/* Gender Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Gender</h3>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => {
                  setSelectedGender(e.target.value);
                  setCurrentPage(1);
                }}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => {
                  setSelectedGender(e.target.value);
                  setCurrentPage(1);
                }}
              />{' '}
              Female
            </label>
          </div>
        </div>
        <hr className="my-4" />
        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <span className="block w-4 h-4 bg-brown-500 rounded-full"></span>{' '}
              Brown
              <input
                type="radio"
                name="color"
                value="Brown"
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
            <label className="flex items-center gap-2">
              <span className="block w-4 h-4 bg-white border rounded-full"></span>{' '}
              White
              <input
                type="radio"
                name="color"
                value="White"
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
          </div>
        </div>
        <hr className="my-4" />
        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="border rounded p-2 w-1/2"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border rounded p-2 w-1/2"
            />
          </div>
        </div>
        <hr className="my-4" />
        {/* Breed Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Breed</h3>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name="breed"
                value="Small Dog"
                onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  setCurrentPage(1);
                }}
              />{' '}
              Small Dog
            </label>
            <label>
              <input
                type="radio"
                name="breed"
                value="Large Dog"
                onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  setCurrentPage(1);
                }}
              />{' '}
              Large Dog
            </label>
          </div>
        </div>
        {/* Reset Filters Button */}
        <div className="mb-4">
          <button
            className="w-full bg-red-500 text-white p-2 rounded-lg"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Right Section for Dog Cards */}
      <div className="lg:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl font-semibold">
              {selectedBreed ? selectedBreed : 'All Dogs'}
            </h2>
            <p className="text-lg text-gray-500">({filteredDogs.length} puppies)</p>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              className="border p-2 rounded"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDogs.map((dog) => (
            <Link to={`/pet/${dog.id}`} key={dog.id} className="bg-white rounded-lg shadow-lg p-4">
              {/* Image Display */}
              <img
                src={dog.images[Math.floor(Math.random() * dog.images.length)]}
                alt={dog.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              {/* Card Structure */}
              <h3 className="text-lg font-semibold">{dog.name}</h3>
              <p className="text-gray-600">Breed: {dog.breed}</p>
              <p className="text-gray-600">Gender: {dog.gender}</p>
              <p className="text-gray-600">Color: {dog.color}</p>
              <p className="text-gray-800 font-bold">Price: ${dog.price}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DogShowcase;
