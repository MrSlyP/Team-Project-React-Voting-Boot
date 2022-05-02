import React, { useState } from "react";
import "./App.css";
import ListCandidat from "./ListCandidat";
import AddCandidat from "./AddCandidat";
import Winner from "./Winner";
import VoteCandidat from "./VoteCandidat";


function App() {
    
  //Definition of the object candidate and the state it use
  const [candidate, setCandidate] = useState({name:"",nbVote:0});
  const name = candidate.name;
  const nbVote = candidate.nbVote;

  //Declare an array of objects "candidate" and the state it use
  const [candidateList, setCandidateList] = useState([]);

  //useState initialisé à false
  const [isVoting, setIsVoting] = useState(false);
  
  const[endVoting, setEndVoting] = useState(true);

  //Receive the name of the new candidate,add the object candidate to the 
  //array candidateList. It spread the original list and then add the new candidate
  function ajoutCandidat(nameReceived) {
   let candidateNew= {name: nameReceived, nbVote: 0 }
   setCandidate(candidateNew)
   return setCandidateList((candidateList) => [...candidateList, {name: candidateNew.name, nbVote: candidateNew.nbVote}]);
  }

  //at first, it is set to !isVoting : not voting
  //on click, it is set to isVoting : isVoting
  function startVoteHandler() {
      setIsVoting(!isVoting);
  }

  function endVoteHandler() {
      setEndVoting(!endVoting);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* if !isVoting, display AddCandidat component, else hide */}
        {!isVoting ? <AddCandidat
         ajouter = {ajoutCandidat}
        /> : null}

        <button className="btn btn-success mb-3" onClick={startVoteHandler}>Start Vote!</button>

        {!isVoting ? <ListCandidat 
        liste={candidateList}/> : null}

        {isVoting? <button className="btn btn-danger mb-3" onClick={endVoteHandler}>End Vote!</button> : null}
        {isVoting? <VoteCandidat names={candidateList}/> : null}


        

         

        

        <Winner />
      </header>
    </div>
  );
}

export default App;
