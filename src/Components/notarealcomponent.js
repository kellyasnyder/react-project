import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const no = (props) => {
    return (
        <div className="adminCard">
            <form onSubmit={e => props.formSubmit(e, props.id)}>
            <p className="adminDetails">
                {props.id}
            </p>
            {props.isEditing ? (
                <input type="text" className="adminDetails" defaultValue={props.item} name="item" onChange={props.onChange} />) : (
                <p className="adminDetails">
                {props.item}
                </p>
            )}
            {props.isEditing ? (
                <input type="text" className="adminDetails" defaultValue={props.price} name="price" onChange={props.onChange} />) : (
                <p className="adminDetails">
                {props.price}
                </p>
            )}
            {props.isEditing ? (
                <input type="text" className="adminDetails" defaultValue={props.availability} name="availability" onChange={props.onChange} />) : (
                <p className="adminDetails">
                {props.availability}
                </p>
            )}
            <button className="adminButton" onClick={() => props.handleEdit(props.id)} type={props.isEditing ? "Submit" : "Edit"}>{props.isEditing ? "Save" : "Edit"}</button>
            <button className="adminButton" onClick={() => props.deleteProduct(props.id)}>Delete</button>
            </form>
        </div>
    );
}

export default no;