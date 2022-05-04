import React, { useState } from "react";
import "./App.css";
import ListCandidat from "./ListCandidat";
import AddCandidat from "./AddCandidat";
import VoteCandidat from "./VoteCandidat";

function App() {
  //Declare an array of objects "candidateList"
  //initialized to a dummy array
  const [candidateList, setCandidateList] = useState([]);

  //Declaring boolean for 'start vote' button
  //initialized at false
  const [isVoting, setIsVoting] = useState(false);

  //Function ajoutCandidat, receives name of new candidate: nameReceived
  //declare a new variable candidateNew and deconstruct the object nameReceived
  //setCandidateList takes the original candidateList (which is initialized as a dummy array),
  //adds new candidate object that we received,
  //and returns an updated array candidateList
  //function ajoutCandidat is passed as props to AddCandidat.js (props.ajouter)
  function ajoutCandidat(nameReceived) {
    let candidateNew = { name: nameReceived, nbVote: 0 };
    return setCandidateList((candidateList) => [
      ...candidateList,
      { name: candidateNew.name, nbVote: candidateNew.nbVote },
    ]);
  }

  //function startVoteHandler handles button 'Start Vote!'
  //at first, it is set to !isVoting : not voting
  //on click, it is set to isVoting : voting commenced
  function startVoteHandler() {
    setIsVoting(!isVoting);
  }

  //function changeNbVote, receives index of button clicked
  //declaring new variable newCandidateList where it receives current array of candidateList
  //newCandidateList[index].nbVote
  //returns specific candidate name of button clicked and the number of votes
  //increments the number of votes
  //setCandidateList takes new array of candidates: newCandidateList
  //function changeNbVote is passed as props to VoteCandidat.js (props.incrementNbVote)
  function changeNbVote(index) {
    const newCandidateList = [...candidateList];
    newCandidateList[index].nbVote++;
    setCandidateList(newCandidateList);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* ajoutCandidat returns an updated array CandidatList
            that is being passed as props to AddCandidat.js (props.ajouter)
            if !isVoting, display AddCandidat component, else hide */}
        {!isVoting ? <AddCandidat ajouter={ajoutCandidat} /> : null}

        {/* startVoteHandler returns boolean if button has been clicked or not
            candidateList returns array of candidate names
            if !isVoting, display button 'Start Vote' and ListCandidate component, else hide */}
        {!isVoting ? (<button className="btn btn-success mb-3" 
          onClick={startVoteHandler}>Start Vote!</button>) : null}
        {!isVoting ? <ListCandidat liste={candidateList} /> : null}

        {/* candidateList returns array of candidate names
              changeNbVote determines number of votes specific candidate has
              if isVoting, display button 'End Vote' and VoteCandidat component, else hide */}
        {isVoting ? (<VoteCandidat
            voteList={candidateList}
            incrementNbVote={changeNbVote}/>) : null}
      </header>
    </div>
  );
}

export default App;
