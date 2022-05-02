import React, {useState} from "react";

function AddCandidat(props) {
  
  let AddCandidate = props.ajouter
  
  const[enteredName, setEnteredName] = useState(""); 
  
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
        onClick={handle}>Add Candidate
        </button>
        </div>
      </div>
    </form>
  );

}

export default AddCandidat;
