import React, { Component } from 'react';
import Product from './components/product';
import ProductList from "./components/product-list";
import * as productActions from "./action-creators/products";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Cart from "./components/cart";
class App extends Component {
  componentWillMount(){
    console.log("test");
    this.props.actions.getProducts();
  }
  //  handleCart = (product, index) => {
  //   console.log(product+"tttttttt");
  //   this.props.actions.addCart(product);
  // };
  
  render () {
    return (
        <div>
        <Route path="/cartItems" component={Cart}/>
         <Route exact path="/"
            render={props =>
              this.props.isLoading ? ( "DATA lOADING...") : ( <ProductList products={this.props.products} AddToCart={this.handleCart}/> )
            }
          />
       
        </div>
    );
  }
}
function mapStateToProps(state){
  return{
    products:state.products,
    addProduct:state.addProduct
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(productActions,dispatch)
  };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
