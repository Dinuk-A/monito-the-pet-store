import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PetDetails from "./components/PetDetails.jsx";
import Dog from "./pages/Dog.jsx"; // Import the Dog page
import { DogProvider } from './components/DogContext';

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
          <Route path="/dog" element={<Dog />} />

          {/* for fake dog cards */}
          <Route path="/pet/:id" element={<PetDetails />} />

        </Routes>
      </Router>
    </DogProvider>
  );
}

export default App;
