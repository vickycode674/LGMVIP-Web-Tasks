
import './App.css';
import React, {useState} from 'react';
const App=()=> {

  const [users,setUser] =useState([])

  const loadUsers=async() =>{
    console.log('before');

    const response=await fetch ("https://api.github.com/users");

    const jsonresponse=await response.json(); 

    setUser(jsonresponse);
  };

  return (
    <div className="App">
      <h1>Hello all my name is mohammad pasha</h1>
    

    <button onClick={loadUsers}>Get Data</button>

    <h2> User info ra unga:</h2>
     <ul>
       {users.map(({id,login})=>(
        <li key={id}>Name:{login}
        </li>
       ))}
     </ul>
  </div>
  );
}

export default App;
