import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JobListing from "./pages/JobListing";

function App() {
  return (
    <div className="App h-screen bg-gradient-to-t from-[#1c014a] to-[#5c3c93] p-8">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<JobListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
