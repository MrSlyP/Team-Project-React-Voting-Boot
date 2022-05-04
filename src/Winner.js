import React from "react";

function Winner(props) {
    //retrieving data passed from App.js
    //storing the candidateList value from App.js in new variable finalList
    let finalList = props.result;
    
    //mapping array to find the highest votes
    const highestVotes = Math.max(...finalList.map(candidate => candidate.nbVote ));
    
    //finding candidate that matches highest votes
    const winner = finalList.find(candidate => candidate.nbVote === highestVotes);
    
    //A variable to stock the value of the numbers of vote of the winner
    let val = winner.nbVote

    //function to retreive all candidate's name who has same number of vote (num here)
    //as the winner, in case of equality
    function getAllIndexes(arr, num) {
      let indexes = []
      
      for (let i =0 ; i<arr.length; i++){
          if(arr[i].nbVote===num)
          indexes.push(arr[i].name);
      }
      return indexes;
  }
    
     
     //delare a array to stock all the name of the winners (witch you get by the function getAllIndexes)
     let winnerList = getAllIndexes(finalList, val);
     
     //to check, it does write into the console
     console.log(winnerList)

    return (
        <div>
          WINNER
        <ul className="list-group mb-3">
          
         {winnerList.map((nom,index)=> {<p key={index}>{nom}</p>})}
        
      
        </ul>
      </div>
    );
  }
  
  export default Winner;