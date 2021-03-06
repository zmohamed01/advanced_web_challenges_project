import * as actionTypes from  './shopping-types';

export const addToCart = (itemID) => {
    console.log("######### addToCart ########");
    return {
        type : actionTypes.ADD_TO_CART,
        payload: {
            id : itemID
        }
    }
}


export const removeFromCart = (itemID) => {
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload: {
            id : itemID
        }
    }
}


export const adjustQty = (itemID , value) => {
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload: {
            id : itemID,
            qty : value
        },
    };
};



