import {useEffect, useState} from 'react'; //useEffect == componentDidMount(api calls go in here)//componentDidUpdate
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

const [cardData, setCardData] = useState(null); //you pass initial state into useState. useState is returning tuple of array w 2 values, reactive state and setter
//similar to this.state.cardData and this.setState ^

console.log("top", cardData);
 useEffect(()=> {
   fetch('http://localhost:4000/')
   .then(response => response.json())
  .then(data => setCardData(data)); //setCardData now runs whatever you pass to it
   
 }, []
 ) //props or state. empty [] for side effect to happen only 1x
 console.log(cardData); //cardData.map{jsx}


//  handleInputChange = e => {
//    this.setState({
//      [e.target.name]: e.target.value,
//    })
//  }

//  handleSubmit = e => {
//    e.preventDefault();

  // const post = {

  // }

  //  axios
  //   .post('http://localhost:4000/addNewEntry', post)
//  }
  return (

    <div className="App">
      
        <p>hey lil moodie ~</p>
      <form>
        <label>
          Name:
          <input type="text"  />
        </label>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

