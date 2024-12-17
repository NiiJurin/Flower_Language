import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FlowerDiagnosis from "./Flower_Diagnosis";
import ContactPage from "./test";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flower-diagnosis" element={<FlowerDiagnosis />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
