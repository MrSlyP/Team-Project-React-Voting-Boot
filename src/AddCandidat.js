import React from "react";

function AddCandidat(props) {
  //Idée initiale: que l'ajout d'un candidat l'ajoute
  //à candidateList et modifie l'index du state
  let changeIndex = props.changeIndex;
  let index = props.indexValue;
  return (
    <div>
      Ici on gère l'ajout
      <div class="form-group">
        <label for="candidateInput"></label>
        <input
          type="nameCandidate"
          class="form-control"
          id="nameCandidate"
          placeholder="Candidate's name"
        />

        <button onClick={(e) => {
          changeIndex(e);
        }}
        type="submit" class="btn btn-primary">
          Add candidate no {index + 1} 
        </button>
      </div>
    </div>
  );
}

export default AddCandidat;
