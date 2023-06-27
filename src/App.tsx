
import ListGroup from "./components/ListGroup";

function App() {

  let items =[
    'Nairobi',
    'Nakuru',
    'Mombasa',
    'Eldoret'
];
const handleSelectItem = (items:string) => {
  console.log(items);
}
  return <div><ListGroup items={items} heading="Kenya Cities" onselectItem={handleSelectItem} /></div>;
}
export default App;