import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login';

function App() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const LoggingIn = details =>{
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged In");
            setUser({
                name: details.name,
                email: details.email
            });
        } else{
        console.log("Details, do not match, register");
        setError("Details, do not match, please sign up");
        }
    }

    const Logout = () =>{
        console.log("Logout");
        setUser({name: "", email: ""});
    }

  return (
    <div className="App">
        {(user.email != "") ? (
            <div className= "welcome">
                <h2> Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (
            <Login LoggingIn={LoggingIn} error={error}/>
        )}
    </div>
  );
}

export default App;
