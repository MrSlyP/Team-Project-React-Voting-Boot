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
  const [index, setIndex] = useState(0);

  //Declare an array of objects "candidate"
  const [candidateList, setCandidateList] = useState([]);
  //Definition of the object candidate
  const [candidate, setCandidate] = useState({ name: "", nbVote: 0 });
  const name = candidate.name;
  const nbVote = candidate.nbVote;

  
    function addCandidate(nameReceived) {
    //on recoit le nouveau candidat suite à l'event
    let newName = nameReceived;
    //to check what is receive here (it receive the name!)
    console.log(newName);
    //on "spread" l'ancien objet candidate puis on ajoute le nouveau
    //Maybe we should separe this in 2 diffrents functions
    ajoutCandidat(
      setCandidate((prevCandidate) => {
        return { ...prevCandidate, name: newName, nbVote: 0 };
      })
    );
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
        <ListCandidat 
        liste={candidateList} 
        test={candidate.name}
        />
        <AddCandidat
         
        ajouter = {addCandidate}
          /*NameHandler = {NameHandler}
          changeIndex = {handleIndexList}
        indexValue = {index}*/
          /> 
        <Winner />
      </header>
    </div>
  );
}

export default App;
