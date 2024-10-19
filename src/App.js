import React from "react";
import Meme from "./component/Meme.js";
import Navbar from "./component/Navbar.js";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Meme />
    </div>
  )
}