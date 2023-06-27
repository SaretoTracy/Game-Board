import { useState } from "react";


function ListGroup() {
    let items =[
        'Nairobi',
        'Nakuru',
        'Mombasa',
        'Eldoret'
    ];
//event handler


 const [selectedIndex, setselectedIndex] = useState (-1);

  return (
    <>
        <h1>Lists</h1>
        
    <ul className="list-group">
      {items.map((item,index)=>(
    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item ' } 
    key={item }
    onClick={() => {setselectedIndex(index)}}>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
