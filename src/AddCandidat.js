import React, {useState} from "react";

function AddCandidat(props) {
  
  //retrieving data passed from App.js
  //storing the updated candidateList in new variable AddCandidate
  let AddCandidate = props.ajouter
  
  //declaring enteredName and initializing it to ""
  const[enteredName, setEnteredName] = useState(""); 
  
  //once button 'Add Candidate' is clicked (onClick)
  //function nameHandler adds enteredName (user's input) in candidateList
  //setEnteredName is being initialized after the user's input
  function nameHandler() {
      AddCandidate(enteredName);
      setEnteredName("")  
    }

  //function submitHandler deals with the event once button is clicked 
  //prevents form from reloading after clicking button
  const submitHandler = (event) => {
    event.preventDefault();
    
    };

  return (
    <form onSubmit={submitHandler}> 
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Candidate's name"
          aria-label="Candidate's name" 
          aria-describedby="button-addon2"
          value={enteredName} onChange={(e) => {setEnteredName(e.target.value)}} 
        />
        <div className="input-group-append">
        <button
        type="button" 
        className="btn btn-outline-secondary"
        id="button-addon2" 
        onClick={nameHandler}>Add Candidate
        </button>
        </div>
      </div>
    </form>
  );

}

export default AddCandidat;



