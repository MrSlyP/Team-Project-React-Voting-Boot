import React, {useState} from "react";
import ListCandidat from "./ListCandidat";

function VoteCandidat(props) {
  const [state, setCount] = useState({count : 0});
  const count = state.count

  function incrementCount() {
    
    setCount (prevState => {
      return { ...prevState, count: prevState.count +1}
    })
  }
   
    return (
        <div>
        <ul className="list-group mb-3 ">
         {props.names.map(({name, nbVote}) => (
        <li className="list-group-item list-group-item-light" 
        key={name}>{name} Votes: {count}
        <button type="button" 
        className="btn btn-primary ml-3"
        onClick={() => incrementCount()}>Vote</button>
        </li> 
      ))}
      </ul>
        </div>
    );
  }
  
  export default VoteCandidat;