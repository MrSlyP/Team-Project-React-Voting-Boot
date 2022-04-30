import React, {useState} from "react";

function AddCandidat(props) {
  //Idée initiale: que l'ajout d'un candidat l'ajoute
  //à candidateList et modifie l'index du state
  //let changeIndex = props.changeIndex;
  //let index = props.indexValue;

  const[enteredName, setEnteredName] = useState("");

  const NameHandler = (event) => {
    //function to retrive candidate name entered
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    //prevents form from reloading after clicking button
    event.preventDefault();
    //candidate name entered is being stored in variable
    const candidateNames = {enteredName};
    //console.log(candidateNames);

    //sending candidateNames as props towards ListCandidat.js
    props.onSaveCandidat(candidateNames);
    //reset textbox
    setEnteredName("");

 

};

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="candidateInput"></label>
        <input
          type="text"
          //type="nameCandidate"
          className="form-control"
          //id="nameCandidate"
          placeholder="Candidate's name"
          value={enteredName}
          onChange={NameHandler}
        />
        <button
        type="submit" className="btn btn-primary">
          Add{/* Add candidate no {index + 1}  */}
        </button>
      </div>
    </form>
  );

}

export default AddCandidat;
