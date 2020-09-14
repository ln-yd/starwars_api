import React from "react";
import { Router } from "@reach/router";
import SearchStarWars from "./components/SearchStarwars";
import StarwarsPeople from "./views/StarwarsPeople";
import StarwarsPlanet from "./views/StarwarsPlanet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchStarWars />

      <Router>
        <StarwarsPeople path="/people/:id" />
      </Router>
      <Router>
        <StarwarsPlanet path="planets/:id" />
      </Router>
    </div>
  );
}

export default App;
