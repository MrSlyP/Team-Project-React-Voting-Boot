import React, {useState} from "react";

function AddCandidat(props) {
  
  let AddCandidate = props.ajouter
  
  const[enteredName, setEnteredName] = useState(); 
  
  //Fonction qui gere le clic, sans cela ça fait une infinite loop
  function handle() {
      AddCandidate(enteredName);
      setEnteredName("")  
    }

  const submitHandler = (event) => {
    //prevents form from reloading after clicking button
    event.preventDefault();
    
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
          Add
        </button>
      </div>
    </form>
  );

}

export default AddCandidat;
