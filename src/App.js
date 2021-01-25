import './App.css';
import Demo1 from './components/Demo1'
import Product from './components/Product'


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
  
  return (
    <div className="App">
        <Demo1 firstDataProps='Hello props' firstEvent={ () => firstEvent() } />
        {renderJson1}
    </div>
  );
}



export default App;
