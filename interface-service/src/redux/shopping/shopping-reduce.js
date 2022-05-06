import { ListItem } from "@material-ui/core";
import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [],   
};


const shopReducer = (state = INITIAL_STATE, action) => {
    console.log('action -->:' , action)
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            console.log('action.payload.id ' , action.payload.id)
            //find if item already exist 
            const product = INITIAL_STATE.products.find(e=> e.id === action.payload.id);
            if( !product ){
                const item = action.payload;
                item.qty  =1;
                INITIAL_STATE.products.push(item)
            }else{
                product.qty = product.qty+1;
            }

            console.log('product ' , product)
            const updatedProduct = INITIAL_STATE.products;
            
            return{...INITIAL_STATE ,products : updatedProduct };
        case actionTypes.REMOVE_FROM_CART:
            const remainingPrudctsAfterRemoval = state.products.filter(e=> e.id !== action.payload.id)
            console.log('Remove product' , action.payload);

           
            return {...state , products : remainingPrudctsAfterRemoval};
        case actionTypes.ADJUST_QTY:
            return{};
        default:
            return state;
            

    }
}

export default shopReducer;