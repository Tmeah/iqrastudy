import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Router>
      <React.Fragment>
        <Navigation toggleModal={toggleModal} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {isModalOpen && <ContactForm onClose={toggleModal} />}
      </React.Fragment>
    </Router>
  );
}

export default App;
