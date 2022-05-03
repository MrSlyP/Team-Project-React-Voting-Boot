
function VoteCandidat(props) {

   //retrieving function passed from App.js
  //function to update the number of votes in the state
  let incrementCount = props.incrementNbVote

  //retrieving data passed from App.js
  //storing the candidateList value from App.js in new variable voteNames
  let voteNames = props.voteList
 
    return (
        <div>
          {/* mapping through candidateList array 
          deconstructing the object to retrieve name and nbVote
          returning i: index of selected vote button
          index is then passed in function incrementCount
          which will update number of votes  */}
        <ul className="list-group mb-3 ">
         {voteNames.map(({name, nbVote},i) => (
        <li className="list-group-item list-group-item-light" 
        key={name}>{name} Votes: {nbVote}
        <button type="button" 
        className="btn btn-primary ml-3"
        onClick={() => incrementCount(i)}>Vote</button>
        </li> 
      ))}
      </ul>
        </div>
    );
  }
  
  export default VoteCandidat;