import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { useDogs } from '../components/DogContext';

const DogShowcase = () => {
  const dogs = useDogs();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const itemsPerPage = 15;

  // Previous filter states remain the same
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [sortOption, setSortOption] = useState('popular');

  // Previous filtering and sorting logic remains the same
  const filteredDogs = dogs.filter((dog) => {
    const genderMatch = selectedGender ? dog.gender === selectedGender : true;
    const colorMatch = selectedColor ? dog.color === selectedColor : true;
    const priceMatch =
      (minPrice ? dog.price >= minPrice : true) &&
      (maxPrice ? dog.price <= maxPrice : true);
    const breedMatch = selectedBreed ? dog.breed.includes(selectedBreed) : true;
    return genderMatch && colorMatch && priceMatch && breedMatch;
  });

  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price;
    }
    return a.id - b.id;
  });

  const totalPages = Math.ceil(sortedDogs.length / itemsPerPage);
  const displayedDogs = sortedDogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const resetFilters = () => {
    setSelectedGender('');
    setSelectedColor('');
    setMinPrice('');
    setMaxPrice('');
    setSelectedBreed('');
    setSortOption('popular');
    setCurrentPage(1);
  };

  // Filter Panel Component
  const FilterPanel = () => (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button onClick={() => setIsDrawerOpen(false)}>
          <X className="h-6 w-6" />
        </button>
      </div>
      
      {/* Gender Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Gender</h3>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={selectedGender === 'Male'}
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
              checked={selectedGender === 'Female'}
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
              checked={selectedColor === 'Brown'}
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
              checked={selectedColor === 'White'}
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
              checked={selectedBreed === 'Small Dog'}
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
              checked={selectedBreed === 'Large Dog'}
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
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center mb-6">
        <select
          className="border p-2 rounded"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="popular">Popular</option>
          <option value="price">Price</option>
        </select>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 rounded-lg bg-gray-100"
        >
          <Filter className="h-6 w-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-1/4 bg-white p-6 shadow-lg rounded-lg">
          <FilterPanel />
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 z-50 w-full md:w-96 bg-white transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <FilterPanel />
        </div>

        {/* Overlay for mobile drawer */}
        {isDrawerOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Right Section */}
        <div className="lg:w-3/4">
          <div className="hidden lg:flex justify-between items-center mb-6">
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
                <img
                  src={dog.images[Math.floor(Math.random() * dog.images.length)]}
                  alt={dog.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
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
                      className={`px-4 py-2 rounded ${
                        currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                      }`}
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
    </div>
  );
};

export default DogShowcase;