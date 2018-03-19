import React, { Component } from "react";
import { addProduct } from '../action-creators/products';
const Product = ({ product, AddToCart, index }) => (
 <div>
        
          <div className="container" id="productTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>productName</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Add to Cart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__340.jpg 1x, https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__480.jpg 2x" src="https://cdn.pixabay.com/photo/2018/03/08/18/27/animals-3209388__340.jpg" alt="Animals, Charming, Cat, Mammals, Nature" title="Animals, Charming, Cat, Mammals" />
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="btn btn-primary" href="prd-desc.html">Description</button>
                  </td>
                  <td>
                 
                    <button type="submit" className="btn btn-success"   onClick={function() { AddToCart(product, index);}}>Add to Cart</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        

);
export default Product;