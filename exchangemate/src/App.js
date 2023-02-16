import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

