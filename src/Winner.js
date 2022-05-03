import React from "react";

function Winner(props) {
    //retrieving data passed from App.js
    //storing the candidateList value from App.js in new variable finalList
    let finalList = props.result;
    
    //mapping array to find the highest votes
    const highestVotes = Math.max(...finalList.map(candidate => candidate.nbVote ));
    
    //finding candidate that matches highest votes
    const winner = finalList.find(candidate => candidate.nbVote === highestVotes);
   
    return (
        <div>
            <ul className="list-group mb-3">
            <li className="list-group-item list-group-item-light">
                <h1>Winner</h1>
                <p>{winner.name}</p>
            </li>
            </ul>
      </div>
    );
  }
  
  export default Winner;