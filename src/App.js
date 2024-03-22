import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Check_page from './pages/Check_page';
import { Route ,Routes } from 'react-router-dom';
import Practice from './Practice';

function App() {
 
  const [data,setData] = useState([]);
  
  useEffect(()=>{
     
    const getData = async() => {

         const list = await axios.get("http://localhost:5000");
         console.log(list)
         setData(list.data);
       
    }
    
    getData();
    
  },[]);


  return (
    <div className="App">
      
      <Check_page/>
    </div>
  );
}

export default App;
