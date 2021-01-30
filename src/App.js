import { Button } from 'reactstrap';

import './App.css'

import Demo1 from './components/Demo1'
import Product from './components/Product'
import Count from './components/Count'
import SttObj from './components/SttObj'
import Shop from './components/Shop'



function App() {
  let json1 = [
    { id:0, name: 'dat ma', age: 30 },
    { id:1, name: 'dat ma XM', age: 22 },
    { id:2, name: 'dat ma VT', age: 55 },
    { id:3, name: 'idiot', age: 3 },
  ]

  const renderJson1 = json1.map( x => {
      return <Product
        key={x.id}
        name={x.name}
        age={x.age}
      />;
  });

  const firstEvent = (number = 5) => {
    console.log(`number: ${number}`);
    console.log(`a`);
  }
  
  let count = 0;
  return (
    <div className="App">
        <Demo1 firstDataProps='Hello props' firstEvent={ () => firstEvent() } />
        <hr></hr>
        {renderJson1}
        <hr></hr>
        <Count count={count}/>
        <hr></hr>
        <SttObj/>
        <hr></hr>
        <hr></hr>
        <Button color="danger">click</Button>
        <hr/>
        <Shop/>
    </div>
  );
}



export default App;
