function ListCandidat(props) {
  //storing the candidateList value from App.js in new variable listeC
  const listeC = props.liste;

  return (
    // mapping through candidateList (listeC) array 
    <ul className="list-group mb-3">
      {listeC.map(({ name }) => (
        <li className="list-group-item list-group-item-light" key={name}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default ListCandidat;
