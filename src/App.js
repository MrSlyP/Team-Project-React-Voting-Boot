import React, { useState } from "react";
import "./App.css";
import ListCandidat from "./ListCandidat";
import AddCandidat from "./AddCandidat";
import Winner from "./Winner";


function App() {
    
  //Definition of the object candidate and the state it use
  const [candidate, setCandidate] = useState({name:"",nbVote:0});
  const name = candidate.name;
  const nbVote = candidate.nbVote;

  //Declare an array of objects "candidate" and the state it use
  const [candidateList, setCandidateList] = useState([]);

  
  //Receive the name of the new candidate,add the object candidate to the 
  //array candidateList. It spread the original list and then add the new candidate
  function ajoutCandidat(nameReceived) {
   let candidateNew= {name: nameReceived, nbVote: 0 }
   setCandidate(candidateNew)
   return setCandidateList((candidateList) => [...candidateList, {name: candidateNew.name, nbVote: candidateNew.nbVote}]);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <AddCandidat
         ajouter = {ajoutCandidat}
        /> 
        <ListCandidat 
        liste={candidateList} 
         />
        <Winner />
      </header>
    </div>
  );
}

export default App;
