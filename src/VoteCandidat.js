import React, {useState} from "react";
import ListCandidat from "./ListCandidat";

function VoteCandidat(props) {
  const [count, setCount] = useState(0);
   
    return (
        <div>
        <ul className="list-group mb-3 ">
         {props.names.map(({name, nbVote}) => (
        <li className="list-group-item list-group-item-light" 
        key={name}>{name} Votes: {count}
        <button type="button" 
        className="btn btn-primary ml-3"
        onClick={() => setCount(count + 1)}>Vote</button>
        </li> 
      ))}
      </ul>
        </div>
    );
  }
  
  export default VoteCandidat;