import React, { useState } from "react";
import './App.css';
import ListCandidat from "./ListCandidat";
import AddCandidat from "./AddCandidat";
import Winner from "./Winner";

//Liste qui devra être vide au début. Sert à stocker
// les candidats au fur et à mesure de leur création.
let candidateList = ["bidon"];


function App() {

  // Ajoutez la gestion du state ici 
  const [index, setIndex] = useState(0);

  //Fonction pour modifier le state qui gère l'ajout à
  // la liste de candidats (ou autre on verra)
  function handleIndexList(e) {
    setIndex(index + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
     
          <ListCandidat 
          liste = {candidateList}
          />
          {/* <AddCandidat 
          changeIndex = {handleIndexList}
          indexValue = {index}
          /> */}
          <Winner />
    
      </header>
    </div>
  )
}

export default App;
