import React from "react";

function AddCandidat(props) {
  //Idée initiale: que l'ajout d'un candidat l'ajoute
  //à candidateList et modifie l'index du state
  let changeIndex = props.changeIndex;
  let index = props.indexValue;
  return (
    <div>
      Ici on gère l'ajout
      <div className="form-group">
        <label htmlFor="candidateInput"></label>
        <input
          type="nameCandidate"
          className="form-control"
          id="nameCandidate"
          placeholder="Candidate's name"
        />

        <button onClick={(e) => {
          changeIndex(e);
        }}
        type="submit" className="btn btn-primary">
          Add candidate no {index + 1} 
        </button>
      </div>
    </div>
  );
}

export default AddCandidat;
