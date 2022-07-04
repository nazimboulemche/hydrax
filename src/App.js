import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Acceuil from "./components/Acceuil"
import Fondateur from "./components/Fondateur";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Acceuil />
      <Fondateur />
      <Contact />
    </>
  );
}

export default App;
