import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { useDogs } from './PetContext';

const FilterPanel = ({
  selectedGender,
  setSelectedGender,
  selectedColors,
  setSelectedColors,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedBreed,
  setSelectedBreed,
  sortOption,
  setSortOption,
  resetFilters,
  setCurrentPage,
  setIsDrawerOpen,
  priceError
}) => (
  <div className="bg-white p-6">
    <div className="flex justify-between items-center mb-6 lg:hidden">
      <h2 className="text-xl font-semibold">Filters</h2>
      <button onClick={() => setIsDrawerOpen(false)}>
        <X className="h-6 w-6" />
      </button>
    </div>

    {/* Gender Filter - Changed to checkboxes and stacked */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Gender</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            value="Male"
            checked={selectedGender === 'Male'}
            onChange={(e) => {
              setSelectedGender(e.target.checked ? 'Male' : '');
              setCurrentPage(1);
            }}
          />
          Male
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            value="Female"
            checked={selectedGender === 'Female'}
            onChange={(e) => {
              setSelectedGender(e.target.checked ? 'Female' : '');
              setCurrentPage(1);
            }}
          />
          Female
        </label>
      </div>
    </div>
    <hr className="my-4" />

    {/* Color Filter - Unchanged */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Color</h3>
      <div className="flex flex-col gap-2">
        {['Brown', 'White', 'Red', 'Apricot', 'Black', 'Black & White', 'Silver', 'Tan'].map((color) => (
          <label key={color} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedColors((prev) =>
                  prev.includes(value)
                    ? prev.filter((c) => c !== value)
                    : [...prev, value]
                );
                setCurrentPage(1);
              }}
            />
            <span className="block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
            {color}
          </label>
        ))}
      </div>
    </div>
    <hr className="my-4" />

    {/* Price Filter - Added error message display */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Price</h3>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded p-2 w-1/2"
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded p-2 w-1/2"
        />
      </div>
      {priceError && (
        <p className="text-red-500 text-sm mt-2">{priceError}</p>
      )}
    </div>
    <hr className="my-4" />

    {/* Breed Filter - Unchanged */}
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Breed</h3>
      <div className="flex flex-col gap-2">
        {['Small Dog', 'Medium Dog', 'Large Dog'].map((breed) => (
          <label key={breed} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={breed}
              checked={selectedBreed.includes(breed)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedBreed((prev) =>
                  prev.includes(value)
                    ? prev.filter((b) => b !== value)
                    : [...prev, value]
                );
                setCurrentPage(1);
              }}
            />
            {breed}
          </label>
        ))}
      </div>
    </div>

    {/* Reset Filters Button */}
    <div className="mb-4">
      <button
        className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </div>
  </div>
);

const DogShowcase = () => {
  const dogs = useDogs();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const itemsPerPage = 15;

  // Filter states
  const [selectedGender, setSelectedGender] = useState('');  // Changed to single value
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [sortOption, setSortOption] = useState('popular');
  const [priceError, setPriceError] = useState('');

  // Price validation
  useEffect(() => {
    if (minPrice && maxPrice) {
      if (Number(minPrice) > Number(maxPrice)) {
        setPriceError('Minimum price cannot be greater than maximum price');
      } else {
        setPriceError('');
      }
    } else if (minPrice < 0 || maxPrice < 0) {
      setPriceError('Price cannot be negative');
    } else {
      setPriceError('');
    }
  }, [minPrice, maxPrice]);

  // Filtering logic with validation
  const filteredDogs = dogs.filter((dog) => {
    const genderMatch = selectedGender ? dog.gender === selectedGender : true;
    const colorMatch = selectedColors.length > 0 ? selectedColors.includes(dog.color) : true;
    const priceMatch = !priceError && (
      (minPrice ? dog.price >= Number(minPrice) : true) &&
      (maxPrice ? dog.price <= Number(maxPrice) : true)
    );
    const breedMatch = selectedBreed.length > 0 ? selectedBreed.includes(dog.breed) : true;

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

  const resetFilters = () => {
    setSelectedGender('');
    setSelectedColors([]);
    setMinPrice('');
    setMaxPrice('');
    setSelectedBreed([]);
    setSortOption('popular');
    setCurrentPage(1);
    setPriceError('');
  };

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
          <FilterPanel
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedBreed={selectedBreed}
            setSelectedBreed={setSelectedBreed}
            sortOption={sortOption}
            setSortOption={setSortOption}
            resetFilters={resetFilters}
            setCurrentPage={setCurrentPage}
            setIsDrawerOpen={setIsDrawerOpen}
            priceError={priceError}
          />
        </div>

        {/* Dogs List */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* {displayedDogs.map((dog) => (
              <div key={dog.id} className="border rounded-lg p-4 shadow">
                <img src={dog.imageUrl} alt={dog.name} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{dog.name}</h3>
                <p className="text-gray-500">{dog.breed}</p>
                <p className="text-gray-900 font-bold">${dog.price}</p>
              </div>
            ))} */}

            {displayedDogs.map((dog) => (
              <Link to={`/pet/${dog.id}`} key={dog.id} className="bg-white rounded-lg shadow-lg p-4">
                {/* Image Display */}
                <img
                  src={dog.images[0]}
                  alt={dog.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                {/* Card Structure */}
                <h3 className="text-lg font-bold">MO{dog.id} - {dog.name}</h3>

                <p className="text-gray-600">Gene: {dog.gender} - Age: {dog.age} Months</p>

                <p className="text-gray-800 font-semibold">Price: {dog.price}VND</p>
              </Link>
            ))}

          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="bg-blue-500 text-white p-2 rounded mx-1 disabled:bg-gray-300"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`p-2 rounded mx-1 ${currentPage === page + 1 ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
              >
                {page + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="bg-blue-500 text-white p-2 rounded mx-1 disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white p-6 overflow-y-auto">
            <FilterPanel
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedBreed={selectedBreed}
              setSelectedBreed={setSelectedBreed}
              sortOption={sortOption}
              setSortOption={setSortOption}
              resetFilters={resetFilters}
              setCurrentPage={setCurrentPage}
              setIsDrawerOpen={setIsDrawerOpen}
              priceError={priceError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DogShowcase;
