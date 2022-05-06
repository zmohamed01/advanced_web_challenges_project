import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route, Link,Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import Navbar from './components/Navbar';
import Women from './pages/Women';
import Men from './pages/Men';
import Dresses from './pages/Dresses';
import FShirts from './pages/FShirts';
import FTrousers from './pages/FTrousers';
import MShirts from './pages/MShirts';
import MTrousers from './pages/MTrousers';
import Cart from './pages/Cart';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from  'react-redux';
import store from './redux/store';
import Checkout from './pages/Checkout';

ReactDOM.render(
    
   <BrowserRouter> 
   <Provider store={store}>
   <Routes>
     <Route path = "/" element={<App/>}> </Route>
     <Route path = "/Login" element={<Login/>}> </Route>
     <Route path = "/Signup" element={<Signup/>}> </Route>
     <Route path = "/Men" element={<Men/>}> </Route>
     <Route path = "/Women" element={<Women/>}> </Route>
     <Route path = "/Women/Dresses" element={<Dresses/>}> </Route>
     <Route path = "/Women/Shirts" element={<FShirts/>}> </Route>
     <Route path = "/Women/Trousers" element={<FTrousers/>}> </Route>
     <Route path = "/Men/Shirts" element={<MShirts/>}> </Route>
     <Route path = "/Men/Trousers" element={<MTrousers/>}> </Route>
     <Route path = "/Cart" element={<Cart/>}> </Route>
     <Route path = "/Checkout" element={<Checkout/>}> </Route>

   </Routes>
   </Provider>
   </BrowserRouter>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
