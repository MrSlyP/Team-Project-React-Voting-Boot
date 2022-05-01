import React, {useState} from "react";

function AddCandidat(props) {
  //Idée initiale: que l'ajout d'un candidat l'ajoute
  //à candidateList et modifie l'index du state
  //let changeIndex = props.changeIndex;
  //let index = props.indexValue;
  

  //NameHandler = props.NameHandler
  let AddCandidate = props.ajouter
  //let enteredName;

  const[enteredName, setEnteredName] = useState(); 
  
  //Fonction qui gere le clic, sans cela ça fait une infinite loop
  function handle() {
      AddCandidate(enteredName);
          
    }

  const submitHandler = (event) => {
    //prevents form from reloading after clicking button
    event.preventDefault();
    //candidate name entered is being stored in variable
    //const candidateNames = {enteredName};
    //console.log(candidateNames);

    //sending candidateNames as props towards ListCandidat.js
    //AJOUT: we must instead send it to App.js who will send it to ListCandidat.js

    //props.onSaveCandidat(candidateNames);
    //reset textbox
    //setEnteredName("");
    };

  return (
    //
    <form onSubmit={submitHandler}> 
      <div className="form-group">
        <label htmlFor="candidateInput"></label>
        <input
          type="text"
          //type="nameCandidate"
          className="form-control"
          //id="nameCandidate"
          placeholder="Candidate's name"
          value={enteredName} onChange={(e) => {setEnteredName(e.target.value)}} 
          
        />
        <button
        type="submit" className="btn btn-primary" onClick={handle}>
          Add{/* Add candidate no {index + 1}  */}
        </button>
      </div>
    </form>
  );

}

export default AddCandidat;
