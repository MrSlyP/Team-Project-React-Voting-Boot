import React, { useState } from "react";
import AddCandidat from "./AddCandidat";

function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    const listeC = props.liste
    let afficherTest = props.test
    //inspired by: https://stackoverflow.com/questions/38443227/how-to-get-input-text-value-on-click-in-reactjs
    const listCandidates = listeC.map((d) => <li key={d.name}>{d.name}</li>);

    //handling values passed as props
    //retrieving candidateNames
   // const onSaveHandler = (enteredCandidate) => {
    //  const candidates = {enteredCandidate};
     // console.log(candidates);

      //sending candidates as props towards App.js
      //props.onAddCandidat(candidates);
    

    return (
      <div>
           Affichage Candidat {" "}
          {listCandidates} 
         
          {/* retrieving candidateNames value from AddCandidat.js */}
         {/* <AddCandidat onSaveCandidat={onSaveHandler}/> */}
         
      </div>
    );
  }
  
  export default ListCandidat;