
function VoteCandidat(props) {

  //function to update the number of votes in the state
  let incrementCount = props.incrementNbVote
 
   
    return (
        <div>
        <ul className="list-group mb-3 ">
         {props.names.map(({name, nbVote},i) => (
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