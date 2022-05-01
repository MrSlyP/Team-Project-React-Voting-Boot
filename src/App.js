import React, { useState } from "react";
import "./App.css";
import ListCandidat from "./ListCandidat";
import AddCandidat from "./AddCandidat";
import Winner from "./Winner";

//Updating the whole branch to reflect master branch and
//continue from there

//Liste qui devra être vide au début. Sert à stocker
// les candidats au fur et à mesure de leur création.
let candidateList = ["bidon"];

function App() {
  // Ajoutez la gestion du state ici
  //Celui-ci ne sert a rien, on pourrait probablement l'enlever
  //const [index, setIndex] = useState(0);

  

  //Definition of the object candidate and the state it use
  const [candidate, setCandidate] = useState({});
  const name = candidate.name;
  const nbVote = candidate.nbVote;
  //Declare an array of objects "candidate" and the state it use
  const [candidateList, setCandidateList] = useState([]);

  
    function addCandidate(nameReceived) {
    //on recoit le nouveau candidat suite à l'event
    let newName = nameReceived;
    //to check what is receive here (it receive the name from AddCandidat!)
    console.log(newName);

    //on "change" l'bjet candidate avec le newName
    setCandidate({name: newName, nbVote: 0} )
    //On constate ici que le candidate a bien le new name
    console.log(candidate.name);
    //On ajoute le nouveau candidat au array
    ajoutCandidat(candidate);
  }

  //Add the object candidate to the array candidateList
  //it spread the original list and then add the new candidate
  function ajoutCandidat(newCandidate) {
    setCandidateList((candidateList) => [...candidateList, newCandidate]);
  }

  //It was your state, not used right now but still there in case
  const[enteredName, setEnteredName] = useState("");

  //I've comment this function since it was like mine but not entirely

  //const NameHandler = (event) => {
    //function to retrive candidate name entered
  //  setEnteredName(event.target.value);
 // };

  //Fonction pour modifier le state qui gère l'ajout à
  // la liste de candidats (ou autre on verra) --commenté en vue d'être enlevé
  //function handleIndexList(e) {
 //   setIndex(index + 1);
  //}

  return (
    <div className="App">
      <header className="App-header">
        
        <AddCandidat
         ajouter = {addCandidate}
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
