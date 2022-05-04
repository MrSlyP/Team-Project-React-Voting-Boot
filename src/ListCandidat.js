import React, { useState } from "react";


function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils sont ajoutés.

    //retrieving data passed from App.js
    //storing the candidateList value from App.js in new variable candidateList
    const candidateList = props.liste

    return (
      <ul className="list-group mb-3">
         {candidateList.map(({ name, nbVote }) => (
        <li className="list-group-item list-group-item-light" 
        key={name}>{name} 
        </li>
      ))}
      </ul>
    );
  }
  
  export default ListCandidat;