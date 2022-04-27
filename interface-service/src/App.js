import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Commerce from '@chec/commerce.js'
import {BrowserRouter,Routes, Route, Link,Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    // const [cart, setCart] = useState()
    // const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

    // useEffect(() => {
    //     commerce.cart.retrieve()
    //         .then(res => {
    //             setCart(res)
    //         })
    // },[])

    // const addToCart = (productId, variantInfo) => {

    //     if(variantInfo) {
    //         commerce.cart.add(productId, 1, variantInfo)
    //             .then(res => {
    //                 setCart(res.cart)
    //             })
    //     } else {
    //         window.alert('Please Select a Shirt Size')
    //     }
    // }

    // const emptyCart = () => {
    //     commerce.cart.empty()
    //         .then(res => {
    //             setCart(null)
    //         })
    // }

    // <Navbar cart={cart} emptyCart={emptyCart} />  

    // const cartHelperFunctions = {

    //     deleteItem: (lineItemId) => {
    //         commerce.cart.remove(lineItemId)
    //             .then(res => {
    //                 setCart(res.cart)
    //             })
    //     },
    //     addQaunity: (lineItemId, newQuanity) => {
    //         commerce.cart.update(lineItemId, {quantity: newQuanity})
    //             .then(res => {
    //                 setCart(res.cart)
    
    //             })
    //     },
    //     subtractQuanity: (lineItemId, newQuanity) => {
    
    //         if (newQuanity === 0) {
    //             cartHelperFunctions.deleteItem(lineItemId)
    //         } else {
    //             commerce.cart.update(lineItemId, {quantity: newQuanity})
    //                 .then(res => {
    //                     setCart(res.cart)
    //                 })
    //         }
    
    //     }
    // }

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

//   return (
//     <div className="App">
//         {(user.email != "") ? (
//             <div className= "welcome">
//                 <h2> Welcome, <span>{user.name}</span></h2>
//                 <button onClick={Logout}>Logout</button>
//             </div>
//         ) : (
//             <Login LoggingIn={LoggingIn} error={error}/>
//         )}
//     </div>
//   );
return <Home/>
//     <div className="App">
        
//         <Navbar cart={cart} emptyCart={emptyCart}/>
//         <table className="table table-bordered">
//             <th className='left-column' width={5}>
//                 {/* <LeftPanel /> */}
//             </th>
//             <th width={9}>
//                 <div  
//                     addToCart={addToCart} 
//                 />
//             </th>
//         </table>
//         {/* <Footer /> */}
//     </div>
// ); 
}

export default App;
