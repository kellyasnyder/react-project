import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth0/Auth';
import AdminProducts from './AdminProducts';

const Admin = (props) => {
  const productComponents = props.products.map((product) => {
    return (
        <AdminProducts
        id={product._id}
        item={product.item}
        url={product.url}
        price={product.price}
        category={product.category}
        alt={product.alt}
        availability={product.availability}
        deleteProduct={props.deleteProduct}
        formSubmit={props.formSubmit}
        onChange={props.onChange}
        isEditing={props.isEditing}
        ></AdminProducts>
      );
    });

  return (
    <div className="admin">
      <div className="adminCard">
        <p className="adminDetails adminTitle">ID</p>
        <p className="adminDetails adminTitle">Item</p>
        <p className="adminDetails adminTitle">Price</p>
        <p className="adminDetails adminTitle">Availability</p>
        <p className="adminTitle">Edit</p>
        <p className="adminTitle">Delete</p>
      </div>
      {productComponents}
    </div>
  )
}

export default withRouter(Admin);