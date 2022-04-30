import React, { useState } from "react";
import AddCandidat from "./AddCandidat";

function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    //let liste = props.liste

    //handling values passed as props
    //retrieving candidateNames
    const onSaveHandler = (enteredCandidate) => {
      const candidates = {enteredCandidate};
      console.log(candidates);
    };

    return (
      <div>
          {/* Affichage Candidat {" "}
          {liste} */}
          {/* retrieving candidateNames value from AddCandidat.js */}
          <AddCandidat onSaveCandidat={onSaveHandler}/>
      </div>
    )
  }
  
  export default ListCandidat;