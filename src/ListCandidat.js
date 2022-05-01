import React, { useState } from "react";
import AddCandidat from "./AddCandidat";

function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    let listeC = props.liste
    let afficherTest = props.test

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
          {listeC} 
         
          {/* retrieving candidateNames value from AddCandidat.js */}
         {/* <AddCandidat onSaveCandidat={onSaveHandler}/> */}
         rien
      </div>
    );
  }
  
  export default ListCandidat;