import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import UsersList from "./components/UsersList";

function App() {

  const [users, setUsers] = useState([]);

  useEffect( () =>{
    const getUsers =  () =>{
      fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()

  }, [])

  return (
   <Fragment>
      <Navbar brand='CRUD app'/>

      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista de usuarios</h2>
            <UsersList users={users}/>
          </div>
          <div className="col-5">

          </div>
        </div>
      </div>
   </Fragment>
  );
}

export default App;
