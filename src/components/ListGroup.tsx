
function ListGroup() {
    let items =[
        'Nairobi',
        'Nakuru',
        'Mombasa',
        'Eldoret'
    ];


  return (
    <>
        <h1>Lists</h1>
        
    <ul className="list-group">
      {items.map((item, index)=>(
    <li className="list-group-item" key={item  }
    onClick={() => console.log(item, index)}>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
