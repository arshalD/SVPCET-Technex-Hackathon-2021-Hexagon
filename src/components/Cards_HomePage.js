import React from "react";
import { Link } from "react-router-dom";
function Cards_HomePage({ title, imageURL, link }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-img-top">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>
        <div className="card-body">
          <Link to="/">
          <h5 className="card-title text-center ">{title}</h5></Link>

          <Link
            to={link || "/staffList"}
            className="btn btn-danger btn-block my-2"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards_HomePage;
