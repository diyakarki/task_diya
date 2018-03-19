import {
    GET_PRODUCTS,
     GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    ADD_PRODUCT  
} from "../action-types/products.js";
export function getProducts(){
    return{
        type:GET_PRODUCTS
    };
}
export function getProductSuccess(items){
    return{
        type:GET_PRODUCTS_SUCCESS,
        items
    };
}
export function getProductFailure(error){
    return{
        type:GET_PRODUCTS_FAILURE,
        error
    };
}
export function addProduct(){
    return{
        type:ADD_PRODUCT
    };
}