import React from 'react';

const Item = (props) => {
    const {name,price} = props.course;
    const AddEvent = props.AddEvent;
    return (
        <div className="col-md-4">
        <div className="single-item text-center my-4">
            <div className="card p-2">
                <div className="card-body">
                    <h5 className="card-name">{name}</h5>
                    <h4 className="price">${price}</h4>
                    <button className="btn btn-sm btn-primary" onClick={() =>AddEvent(props.course)}>Enroll Now</button>
                </div>
            </div>

        </div>
    </div>
    )}

export default Item;