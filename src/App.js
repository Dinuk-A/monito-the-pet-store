import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PetInfoShowComp from "./components/PetInfoShowComp.jsx";
import FilterPets from "./pages/FilterPets.jsx";
import { DogProvider } from './components/PetContext.jsx';

// Main App component
function App() {
  return (

    //WRAPPING WITH DOG CONTEXT TO PASS dogs OBJECTS
    <DogProvider>
      <Router>
        <Routes>

          {/* ALWAYS STARTS WITH THIS */}
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />

          {/* ROUTE TO FILTERING PAGE */}
          <Route path="/pet" element={<FilterPets />} />

          {/* ROUTE TO SINGLE DOG INFO DISPLAYING PAGE */}
          <Route path="/pet/:id" element={<PetInfoShowComp />} />

        </Routes>
      </Router>
    </DogProvider>
  );
}

export default App;
