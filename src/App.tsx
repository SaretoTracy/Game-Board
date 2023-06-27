
import ListGroup from "./components/ListGroup";

function App() {

  let items =[
    'Nairobi',
    'Nakuru',
    'Mombasa',
    'Eldoret'
];
  return <div><ListGroup items={items} heading="Kenya Cities" /></div>;
}
export default App;