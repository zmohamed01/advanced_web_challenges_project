import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
// import { useHistory } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

import { useSelector  , useDispatch} from 'react-redux'
import * as actionTypes from  '../redux/shopping/shopping-types';

function Cart(){
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const removeItem = (product) => {
        console.log("Product = ", product);
        dispatch({ type:actionTypes.REMOVE_FROM_CART  , payload: product})
    }


const state = useSelector((state) => state);
const products = state.shop.products;
console.log("Products" , products);
let totalPrice = 0
for(let i = 0 ; i < products.length ; i++ ){
    totalPrice = totalPrice + products[i].price * products[i].qty ; 
}

console.log("totalPrice ::: ",totalPrice);


const [loading, setLoading ] = useState(true);
const [cart, setCart] = useState([]);

    // if(!localStorage.getItem('auth_token')){
    //     navigate.push("/");
    //     swal("warning", "Login to goto Cart Page", "error");
    // }

    
    useEffect(()=>{
        let isMounted = true;
        axios.get(`/api/cart`).then(res =>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setCart(res.data.cart);
                    setLoading(false);
                }
                else if(res.data.status === 401)
                {
                    navigate.push('/');
                    swal("Warning", res.data.message, "error");
                }
            }
        });
        return () => {
            isMounted = false;
        };
    }, [navigate]);

    if(loading){
        return <h4>Loading Product Detail ...</h4>
    }

    var cart_HTML = '';
    if(products.length > 0)
    {
        cart_HTML =    <div className = "table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=> {
                        return(
                    <tr key={product.id}>
                        <td width="10%">
                            <img src={product.image} alt= "Prod Image" width="50px" height="50px"/>
                        </td>
                        <td>{product.name}</td>
                        <td width="15%" className="text-center">{product.price}</td>
                        <td width="15%">
                            <div className="input-group">
                                <button type="button" className="input-group-text">-</button>
                                <div  className="form-control text-center">{product.qty}</div>
                                <button type="button" className="input-group-text">+</button>
                            </div>
                        </td>
                        <td width="15%" className="text-center">{product.price * product.qty }</td>
                        <td width="10%">
                            <button type="button" className="btn btn-danger btn-sm" onClick= {()=> removeItem(product)}> Remove</button>
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    }    
    else
    {
        cart_HTML= <div>
            <div className="card card-body py-5 text-center shadow-sm">
                <h4>
                    Your Shopping Cart is empty
                </h4>
            </div>
        </div>
    }
    return(
            <div>
                <div className="py-3 bg-warning">
                    <div className="container">
                        <h6>
                            Home/Cart
                        </h6>
                    </div>
                </div>
                <div className="py-4">
                    <div className= "container">
                        <div className="row">
                            <div className= "col-md-12">
                                {cart_HTML}        
                            </div>

                            <div className="col-md-8"></div>
                            <div className="col-md-4">
                                <div className="card card-body mt-3">
                                    <br/>
                                    <h4>Sub Total:
                                        <span className="float-end">{totalPrice}</span>
                                    </h4>
                                    <h4> Grand Total:
                                        <span className="float-end">{totalPrice}</span>
                                    </h4>
                                    <hr/>
                                    <Link to = "/Checkout" className="btn btn-primary"> Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
}


export default Cart;