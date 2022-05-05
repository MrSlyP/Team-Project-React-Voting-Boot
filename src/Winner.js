import React from "react";

function Winner(props) {
  //retrieving data passed from App.js
  //storing the candidateList value from App.js in new variable finalList
  let finalList = props.result;

  //mapping array to find the highest votes
  const highestVotes = Math.max(
    ...finalList.map((candidate) => candidate.nbVote)
  );

  //finding candidate that matches highest votes
  const winner = finalList.find(
    (candidate) => candidate.nbVote === highestVotes
  );

  //A variable to stock the value of the numbers of vote of the winner
  let val = winner.nbVote;

  //function to retreive all candidate's name who has same number of vote (num here)
  //as the winner, in case of equality
  function getAllIndexes(arr, num) {
    //declare a dummy array to receive the data
    let indexes = [];
    //iterate the array received, if a item of the array
    //has the same nbVote as the value num (here it is
    //the number of votes) then it's name is copied
    //in the array "indexes"
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].nbVote === num) indexes.push(arr[i].name);
    }
    return indexes;
  }

  //delare a array to stock all the name of the winners
  //(witch you get by the function getAllIndexes)
  let winnerList = getAllIndexes(finalList, val);

  //variable to display the winner's list
  let afficheWinners = winnerList.map((winList, index) => (
    <div key={index}>{winList}</div>
  ));

  //to check, it does write into the console
  console.log(winnerList);

  return (
    <ul className="list-group mb-3">
      <li className="list-group-item list-group-item-light" Winner>
        {" "}
        {afficheWinners}
      </li>
    </ul>
  );
}

export default Winner;
