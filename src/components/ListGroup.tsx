
function ListGroup() {
    const items =[
        'Nairobi',
        'Nakuru',
        'Mombasa',
        'Eldoret'
    ];
  return (
    <>
        <h1>Lists</h1>
    <ul className="list-group">
      {items.map((item)=>(
    <li key={item }>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
