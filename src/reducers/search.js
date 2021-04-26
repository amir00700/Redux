import React from 'react'
import{useSelector,useDispatch} from 'react-redux';


const Search = () => {
    const counter=useSelector((state)=>state.counter);
    const signedIn=useSelector((state)=>state.isLogged);
    const dispatch=useDispatch();
    return (
        <div>
            <input type='text'/>
            <h1>Search{counter}</h1>
            <button onClick={()=>dispatch({type:'SIGN_IN'})}>SIGN IN</button>

        </div>
    )
}

export default Search
