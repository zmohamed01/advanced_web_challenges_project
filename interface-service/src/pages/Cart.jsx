import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cart(){
    const navigate = useNavigate();
    const [loading, setLoading ] = useState(true);
    const [cart, setCart] = useState([]);

    // if(!localStorage.getItem('auth_token')){
    //     navigate.push("/");
    //     swal("warning", "Login to goto Cart Page", "error");
    // }
    
    // useEffect(()=>{
    //     let isMounted = true;
    //     axios.get(`/api/cart`).then(res =>{
    //         if(isMounted)
    //         {
    //             if(res.data.status === 200)
    //             {
    //                 setCart(res.data.cart);
    //                 setLoading(false);
    //             }
    //             else if(res.data.status === 401)
    //             {
    //                 navigate.push('/');
    //                 swal("Warning", res.data.message, "error");
    //             }
    //         }
    //     });
    //     return () => {
    //         isMounted = false;
    //     };
    // }, [navigate]);

    // if(loading){
    //     return <h4>Loading Product Detail ...</h4>
    // }

    var cart_HTML = '';
    if(cart.length > 0)
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
                    {cart.map((item)=> {
                        return(
                    <tr>
                        <td width="10%">
                            <img src="" alt= "Prod Image" width="50px" height="50px"/>
                        </td>
                        <td>{item.product.name}</td>
                        <td width="15%" className="text-center">{item.product.selling_price}</td>
                        <td width="15%">
                            <div className="input-group">
                                <button type="button" className="input-group-text">-</button>
                                <div  className="form-control text-center">{item.product.qty}</div>
                                <button type="button" className="input-group-text">+</button>
                            </div>
                        </td>
                        <td width="15%" className="text-center">{item.product.selling_price * item.product.qty }</td>
                        <td width="10%">
                            <button type="button" className="btn btn-danger btn-sm">Remove</button>
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
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Cart;