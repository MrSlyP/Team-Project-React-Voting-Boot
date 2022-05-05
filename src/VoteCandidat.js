import React, { useState } from "react";
import Winner from "./Winner";
import VotesTotal from "./VotesTotal";

function VoteCandidat(props) {
  //retrieving function passed from App.js
  //function to update the number of votes in the state
  let incrementCount = props.incrementNbVote;

  //retrieving data passed from App.js
  //storing the candidateList value from App.js in new variable voteNames
  let voteNames = props.voteList;

  //Declaring boolean for 'end vote' button
  //initialized at false
  const [endVoting, setEndVoting] = useState(false);

  //function endVoteHandler handles button 'End Vote!'
  //at first, it is set to !endVoting : not end Voting
  //on click, it is set to endVoting : voting stopped
  function endVoteHandler() {
    setEndVoting(!endVoting);
  }

  return (
    <div>
      {/* if !endVoting, display button 'End Vote' */}
      {!endVoting && (
        <button className="btn btn-danger mb-3" onClick={endVoteHandler}>
          End Vote!
        </button>
      )}

      {/* mapping through candidateList array 
          deconstructing the object to retrieve name and nbVote
          returning i: index of selected vote button
          index is then passed in function incrementCount
          which will update number of votes
          if !endVoting, display list of candidates to vote and button vote   */}
      {!endVoting && (
        <ul className="list-group mb-3 ">
          {voteNames.map(({ name }, i) => (
            <li className="list-group-item list-group-item-light" key={name}>
              {name}
              <button
                type="button"
                className="btn btn-primary ml-3"
                onClick={() => incrementCount(i)}
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* if endVoting, show Winner and VotesTotal component, else null */}
      <div>{endVoting ? <Winner result={voteNames} /> : null}</div>
      <div>{endVoting ? <VotesTotal total={voteNames} /> : null}</div>
    </div>
  );
}

export default VoteCandidat;
