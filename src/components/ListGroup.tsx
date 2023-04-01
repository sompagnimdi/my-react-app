function ListGroup() {
  const items = ["Ouagadougou", "Koudougou", "Bobo Dioulasso", "Fada", "Dori"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
