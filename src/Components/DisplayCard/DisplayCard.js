import React from 'react';

const DisplayCard = (props) => {
    const {name, picture, price, review} = props.product;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price}</div> 
                    <div className="badge badge-outline">{review}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisplayCard;