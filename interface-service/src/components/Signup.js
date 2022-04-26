import React, {useState} from 'react';
// import './Signup.css';
// import '../components/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { LaptopWindows } from '@material-ui/icons';
import { validEmail, validPassword } from './regex.js';
 function Signup()
 {

       const[FullName , setName] = useState("")
       const[Email , setEmail] = useState("")
       const [Password , setPassword] = useState("")

       const [emailError , setEmailError] = useState("");

       const [signupStatus , setSignupStatus] = useState(false)
       const [emailErr , setEmailErr] = useState(false)
       const [pwdError , setPwdError] = useState(false)

  //   const validate = () => {
  //     if (!validEmail.test(Email)) {
  //        setEmailErr(true);
  //     }
  //     if (!validPassword.test(Password)) {
  //        setPwdError(true);
  //     }
  //  };
   

  

      async function signUp(){
         let item = {FullName,Email,Password}
         console.warn(item)

        console.log("Before posting") 

           axios({
            method: 'post',
            url: 'http://localhost:8000/api/user/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                "email": Email,
                "password":Password,
                "name": FullName
              })
          }).then(res =>{
            console.log("createUserResponse ", res)
            if(res.status === 201){
                  window.alert("Signup successfull");  
                   window.location.replace('./Login') 

            }
            

            
          }).catch(error=>{
            console.log("Error ::" , error)
            console.log("error res", error.response.data);
            window.alert("User Already Exist");

          });

          if (!validEmail.test(Email)) {
            setEmailErr(true);
         }
         if (!validPassword.test(Password)) {
            setPwdError(true);
         }
           
      //     if(createUserResponse.status === 400){
      //       window.alert("User Already Exist");
      // }
      
        
          
          //history.push("/Login");
          //window.location.replace('./Login') 
        
       }

return (
//  <div class="card-back">
<div class="center-wrap">
    <div class="section text-center">
        <h4 class="mb-4 pb-3">Sign Up</h4>
        <div class="form-group">
            <input type="text" value={FullName} onChange={(e)=>setName(e.target.value)}name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
            <i class="input-icon uil uil-user"></i>
        </div>
        <div class="form-group mt-2">
            <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
            <i class="input-icon uil uil-at"></i>
            <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}> {emailErr && <>Your email is invalid</>}</span>
        </div>
        <div class="form-group mt-2">
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
            <i class="input-icon uil uil-lock-alt"></i>
            <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{pwdError && <>Your password is invalid</>}</span>
        </div>
        <br/>
         <input type="submit" onClick={signUp} class="btn mt-4" value="SUBMIT"/>
         

         
         {/* {pwdError && <p>Your password is invalid</p>} */}
    </div>
</div>
// </div>
       
)

}

 export default Signup