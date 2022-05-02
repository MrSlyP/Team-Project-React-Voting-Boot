import React, { useState } from "react";
import VoteCandidat from "./VoteCandidat";


function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    const listeC = props.liste

    
    
    return (
      <ul className="list-group mb-3">
         {listeC.map(({ name, nbVote }) => (
        <li className="list-group-item list-group-item-light" 
        key={name}>{name} 
        </li>
      ))}
      </ul>
    );
  }
  
  export default ListCandidat;