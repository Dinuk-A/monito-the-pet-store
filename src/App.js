import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from  "react-router-dom"; 
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
