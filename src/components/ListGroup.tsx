
function ListGroup() {
    let items =[
        'Nairobi',
        'Nakuru',
        'Mombasa',
        'Eldoret'
    ];
items =[];

  return (
    <>
        <h1>Lists</h1>
        {items.length === 0 && <p>No item found!</p>}
    <ul className="list-group">
      {items.map((item)=>(
    <li key={item  }>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
