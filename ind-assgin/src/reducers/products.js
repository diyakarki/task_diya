import {
    GET_PRODUCTS,
     GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT
} from "../action-types/products.js";
export default(
    prevState ={
        products:[],
        addProduct:{}
    },
    action
) => {
    switch(action.type){
        case GET_PRODUCTS:
        return{
            ...prevState,
            isLoading:true
        };
        case  GET_PRODUCTS_SUCCESS:
        return{
            ...prevState,
            products:action.items,
            isLoading:false
        };
        case ADD_PRODUCT:
        return{
            ...prevState,
            addProduct:{...prevState.addProduct,...action.addProductItem }
        }
        default:
        return prevState;
    }
};