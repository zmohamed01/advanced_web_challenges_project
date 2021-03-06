import React, {useState} from 'react';
import './login.css';

import {useNavigate} from 'react-router-dom';

function Login({}){
    
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const navigate = useNavigate();
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const submitHandler = e =>{
        e.preventDefault();
       
        LoggingIn(details);
    }

    const LoggingIn = details =>{
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged In");
            setUser({
                name: details.name,
                email: details.email
            });
            localStorage.setItem('user' , details.email);
            navigate('/')
        } else{
        console.log("Details, do not match, register");
        setError("Details, do not match, please sign up");
        }
    }


    return(

        <form onSubmit = {submitHandler}>
            <div class="section">
            <div class="container">
                <div class="row full-height justify-content-center">
                    <div class="col-12 text-center align-self-center py-5">
                        <div class="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 class="mb-0 pb-3">
                                <span data-testid="login-1"> Log In </span>
                                <span data-testid="signup-1"> Sign Up </span>
                            </h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                         {(error != "") ? ( <div className= "error error-colour">{error}</div>) : ""}
                                                        {/* <div className="form-group">

                                                            <input type="text" name="name" class="form-style" placeholder= "Your name" id="name" onChange={e => setDetails({...details, name:e.target.value})}value={details.name}/>
                                                        </div> */}
                                                        <div className="form-group">

                                                            <input type="email"  name="email" class="form-style" placeholder= "Your email" id="email" onChange={e => setDetails({...details, email:e.target.value})}value={details.email}/>
                                                            <i class= "input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">

                                                            <input type="password" name="password" class="form-style" placeholder="Your Password" id="password" onChange={e => setDetails({...details, password:e.target.value})}value={details.password}/>
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <br/>
                                                        <input type="submit" class="btn mt-4" value="LOGIN"/>
                                                           <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Sign Up</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
                                                        <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email"  name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                                                        <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password"  name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                                                        <i class="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <br/>
                                                     <input type="submit" class="btn mt-4" value="SUBMIT"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
                                                    

}


export default Login;