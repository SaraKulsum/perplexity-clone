import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Discover from "./pages/Discover";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/page/:title/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
