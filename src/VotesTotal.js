function VotesTotal(props) {
  //retrieving data passed from App.js
  //storing the candidateList value from App.js in new variable candidateList
  const finalList = props.total;

  return (
    // mapping through candidateList (finalList) array
    //deconstructing the object to retrieve name and nbVote
    <div>
      <ul className="list-group mb-3">
        {finalList.map(({ name, nbVote }) => (
          <li className="list-group-item list-group-item-light" key={name}>
            {name} <p>{nbVote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VotesTotal;
