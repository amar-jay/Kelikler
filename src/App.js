import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";

function App() {
  const [reloaded, setReloaded] = useState(false);
  return (
    <div className="app">
      <Header/>
      <Cards reloaded={reloaded}/>
      <SwipeButtons setReloaded={setReloaded}/>
    </div>
  );
}

export default App;
