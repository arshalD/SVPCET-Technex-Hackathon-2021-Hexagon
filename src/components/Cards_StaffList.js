import React from "react";
import { Link } from "react-router-dom";
function Cards_HomePage({ title, imageURL, id }) {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-img-top">
          <img src={imageURL} className="img-fluid" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center ">{title}</h5>

          <Link
            to={`/staffList/${id}`}
            className="btn btn-danger btn-block my-2"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards_HomePage;
