import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FlowerDiagnosis from "./Flower_Diagnosis";
import ContactPage from "./test";
import Navbar from "./Navbar";
import FlowerHistory from "./Flower_History";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flower-diagnosis" element={<FlowerDiagnosis />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/flower-history" element={<FlowerHistory/>}/>
      </Routes>
    </Router>
  );
}

export default App;
