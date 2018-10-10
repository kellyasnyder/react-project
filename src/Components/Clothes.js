import React, {Component} from 'react';
import Products from './Products';
import {withRouter} from 'react-router-dom';

const Clothes = (props) => {
    
    const productComponents = props.products.map((product) => {
        return (
            <Products
            key={product.id}
            item={product.item}
            img={product.url}
            price={product.price}
            category={product.type}
            alt={product.category}
            ></Products>    
        )
    });
      
    return (
        <div>
            <div className="productsContainer">
                <form id='filterMenu' style={{textAlign: "center", marginBottom: "25px"}}>
                    <label for="sortBy" style={{paddingRight: "10px"}}>Sort by:</label>
                    <select id="sortBy" onChange={props.filteredProducts}>
                        <option value="All">All</option>
                        <option value="Tops">Tops</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Pants">Pants</option>
                        <option value="Price – Low to High">Price – Low to High</option>
                        <option value="Price – High to Low">Price – High to Low</option>
                    </select>
                </form>
                { productComponents }
            </div>
        </div>
    )
}

export default withRouter(Clothes);