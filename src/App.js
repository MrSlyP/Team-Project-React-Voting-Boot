import React, { useState } from "react";
import './App.css';
import ListCandidat from "./ListCandidat";

let candidateList = [];

const [index, setIndex] = useState(0);

  //Fonction pour modifier le state qui gère l'ajout à
  // la liste de candidats
  function handleIndexList(e) {
    setIndex(e.target.value);
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
          <ListCandidat />
          <AddCandidat />
          <Winner />
    
      </header>
    </div>
  )
}

export default App;
