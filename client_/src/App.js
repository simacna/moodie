import {useEffect, useState} from 'react'; //useEffect == componentDidMount(api calls go in here)//componentDidUpdate
import './App.css';
import axios from 'axios';
import prop from 'prop-types';

const apiEndpoint = 'http://localhost:4000/';

function App() {

const [cardData, setCardData] = useState(null); //you pass initial state into useState. useState is returning tuple of array w 2 values, reactive state and setter
//similar to this.state.cardData and this.setState ^
// console.log('card data', cardData);

console.log("top", cardData);
 useEffect(()=> { //componentDidMount. runs on every render
   fetch('http://localhost:4000/')
   
   .then(response => response.json())
  //  .then(console.log("response", response)) this throw response not defined, why
  .then(data => setCardData(data)); //setCardData now runs whatever you pass to it
   
 }, []
 ) //props or state. empty [] for side effect to happen only 1x
//  console.log(cardData); //cardData.map{jsx}
// console.log(typeof(cardData));
useEffect(()=>{ 
  const promise = axios.post(apiEndpoint);
  console.log("promise.data", promise);
},[]
);

//  handleInputChange = e => {
//    this.setState({
//      [e.target.name]: e.target.value,
//    })
//  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("top inside handleSubmit");

    const promise = axios.post(apiEndpoint, {
      message: this.state.message
    });

    console.log("promise.data", promise.data);
  }
  
  return (
    <div className="App">  
        <p>hey lil moodie ~</p>
      <form method="post" onSubmit = {}>  
        <label>
          Name:
          <input type="text"  />
        </label>
        <select>
          <option value="happy">happy</option>
          <option value="sad">sad</option>
          <option value="fear">fear</option>
          <option value="disgust">disgust</option>
          <option value="anger">anger</option>
          <option value="surprise">surprise</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}

export default App;

