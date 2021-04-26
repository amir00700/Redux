import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import Nav from './reducers/nav';

function App() {
  const counter=useSelector((state) =>state.counter);
  const signedIn =useSelector((state)=> state.isLogged)
  const dispatch=useDispatch();
  

  return (
    <div className="App">
      <Nav />
     <h1>Counter:{counter}</h1>
     <button onClick={()=>dispatch({type:'INCREMENT'})} >Increament</button>
     {signedIn &&(
     <h1>Movielist</h1>
     )}
    </div>
  );
}

export default App;
