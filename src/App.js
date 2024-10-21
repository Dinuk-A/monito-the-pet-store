import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PetInfoShowComp from "./components/PetInfoShowComp.jsx";
import FilterPets from "./pages/FilterPets.jsx";
import { DogProvider } from './components/PetContext.jsx';

// Main App component
function App() {
  return (
    <DogProvider>
      <Router>
        <Routes>

          {/* app always starts with the homepage */}
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />

          {/* route to the Dog page */}
          <Route path="/pet" element={<FilterPets />} />

          {/* for fake dog cards */}
          <Route path="/pet/:id" element={<PetInfoShowComp />} />

        </Routes>
      </Router>
    </DogProvider>
  );
}

export default App;
