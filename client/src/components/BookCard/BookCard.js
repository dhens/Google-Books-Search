import React from "react";
import "./style.css";

const BookCard = (props) => {
    return(
        <div className="card border-0" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <p className="desc card-text text-justify">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Author:{props.author}</li>
    <li className="list-group-item">Published:{props.published}</li>
  </ul>
  <div className="card-body">
    <a href={props.link} className="card-link btn btn-info">Learn More</a>
  </div>
</div>
        
    )
}

export default BookCard;