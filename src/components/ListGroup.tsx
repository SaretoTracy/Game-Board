import { useState } from "react";

interface Props{
    items:string[];
    heading:string;

    onselectItem:(item: string) =>void
}
function ListGroup({items, heading, onselectItem}:Props) {
  
//event handler


 const [selectedIndex, setselectedIndex] = useState (-1);

  return (
    <>
        <h1>{heading}</h1>
        
    <ul className="list-group">
      {items.map((item,index)=>(
    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item ' } 
    key={item }
    onClick={() => {setselectedIndex(index);
    onselectItem(item)}}>{item}</li>
      ))}
    </ul>
    </>
  );
}
export default ListGroup;
