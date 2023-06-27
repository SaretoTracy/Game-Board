import { MouseEvent } from "react";

function ListGroup() {
    let items =[
        'Nairobi',
        'Nakuru',
        'Mombasa',
        'Eldoret'
    ];
//event handler
const handleClick = (event:MouseEvent) => console.log(event)
  return (
    <>
        <h1>Lists</h1>
        
    <ul className="list-group">
      {items.map((item)=>(
    <li className="list-group-item" key={item  }
    onClick={handleClick}>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
