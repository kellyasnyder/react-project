import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AdminContact = (props) => {
    return (
        <div className="adminCard">
            <p className="adminDetails">
                {props.id}
            </p>
            <p className="adminDetails">
                {props.item}
            </p>
            <p className="adminDetails">
                {props.price}
            </p>
            <p className="adminDetails">
                {props.availability}
            </p>
            <button className="adminButton">Edit</button>
            <button className="adminButton" onClick={() => props.deleteProduct(props.id)}>Delete</button>
        </div>
    );
}

export default withRouter(AdminProducts);