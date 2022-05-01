import React, { useState } from "react";

function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    const listeC = props.liste
    
    return (
      <div>
           Affichage Candidat {" "}
                  
         {listeC.map(({ name, nbVote }) => (
        <p key={name}>{name} has {nbVote} votes.</p>
      ))}


      </div>
    );
  }
  
  export default ListCandidat;