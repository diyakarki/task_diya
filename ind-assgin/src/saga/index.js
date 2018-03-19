import {    
   getProductSuccess,
   getProductFailure 
} from "../action-creators/products.js";
import { put, takeLatest } from "redux-saga/effects";
import {GET_PRODUCTS,ADD_PRODUCT} from "../action-types/products"; 

function* getProducts(){
    let url ="http://localhost:4000/products";
    try{
        let items = yield fetch(url).then(r => r.json());
        yield put(getProductSuccess(items));
        console.log(items, "jhkjfhjkhkj")
    }catch(error){
        yield put(getProductFailure(error));
        console.log(error, "error")
    }
}
// function* addProduct(action){
//     let url="172.16.105.84:3000/api/addToCart";
//     try{
//         let items = yield fetch("172.16.105.84:3000/api/addToCart",{
//             method:'POST',
//             headers:{'Accept':'application/json','Content-Type':'application/json'},
//             body:JSON.stringify(action.addProductItem)
//         }).then(result => result.json());
//     }catch(error){
//         yield put(getProductFailure(error));
//     }
// }
export function* getProductWatcher(){
    yield [
     takeLatest(GET_PRODUCTS,getProducts)
    //  takeLatest(ADD_PRODUCT,addProduct)
     ];
}  


