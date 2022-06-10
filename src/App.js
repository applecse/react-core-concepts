import  React, {useEffect, useState} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {

  const nayoks =['Anwar', 'Manik', 'Josim', 'King', 'bappi', 'shuvo']

 const products=[
   {name: 'Photoshop', price: '$90.99'},
   {name: 'Illustrator', price: '$20.93'},
   {name: 'PDF Reader', price: '$5.96'},
   {name: 'Premiere El', price: '$5.96'},
 ]

    const nayoknames = nayoks.map(nayok => nayok);
    console.log(nayoknames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am React Person</p>

    <Counter></Counter>
    <Users></Users>
        
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>
        {
          products.map(pd =><Product product ={pd}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}

  // function counter start
  function Counter(){
    const [count, setCount] = useState(10);
    const handleIncrease = () =>setCount(count +1);   
    return(
      <div>
        <h1>Count:{count}</h1>
        <button  onMouseMove={() =>setCount(count -1)}>Decrease</button>
        <button onClick={() =>setCount(count +1)}>Increase</button>
      </div>
    )
  }
  // function counter end

  //  API call start

  function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUsers(data))
    }, [])


    return(
      <div>
        <h3>Dynamic Users:{users.length}</h3>
       <ul>
         {
           console.log(users)
         }
         {
           users.map(user => <li>{user.email}</li>)
         }
       </ul>
      </div>
    )
  }


    
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
  }
     const {name,price} = props.product;
      console.log(name,price);
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
    function Person(props){
      return(
        <div style={{border: '5px solid tomato', width:'400px',}}>
          <h3>My name:{props.name}</h3>
          <h3>My Profession: {props.job}</h3>
        </div>
      )
    }
export default App;
