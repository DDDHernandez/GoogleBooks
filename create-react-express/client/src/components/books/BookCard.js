import React from 'react';

const Bookcard = (props) => {
    return (
        <div className="col-sm-4">
        <div className="card" id="desc">
        <img className="card-img-top" src={props.image} alt=""/>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-text">{props.author}</h3>
                <h5 className="card-text">{props.averageRating}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">{props.maturityRating}</p>
                <a className="btn btn-primary" href={props.buyLink}>Buy</a>
            </div>
            </div>
            </div>


    
    )
}

export default Bookcard;