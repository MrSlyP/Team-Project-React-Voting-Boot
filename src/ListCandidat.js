import React, { useState } from "react";

function ListCandidat(props) {
    //But: afficher les candidats à mesure qu'ils
    //sont ajoutés.
    let liste = props.liste

    return (
      <div>
          Affichage Candidat {" "}
          {liste}
      </div>
    )
  }
  
  export default ListCandidat;