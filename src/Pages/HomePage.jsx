import React from "react";
import { Link } from "react-router-dom";
import App from "../App";

export default function HomePage() {
  return (
    <div className="row container-fluid">
      <div className="col-md-12">
        <h1>HomePage</h1>
      </div>
     <div className="col-4 bg-light shadow rounded">
     <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="profilepage" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
     
    </div>
  );
}
