import React from "react";
import Cards_HomePage from "./Cards_HomePage";
import "./styles.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


function HomePage() {
  return (
    <div className="container mt-5">
      <Jumbotron>
        {/* <h1>Staff List</h1> */}
        <section className="sect-container">
        <h2>
          Check out your staff
        </h2>
        <p>
          <Link to="/staffList">
          <Button variant="primary">Check out</Button></Link>
        </p>
        </section>
      </Jumbotron>
      <Jumbotron>
        {/* <h1>Project</h1> */}
        <section className="sect-container">
        <h2>
          Check out your ongoing Projects
        </h2>
        <p>
          <Link to="/projects">
          <Button variant="primary">Check out</Button></Link>
        </p>
        </section>
      </Jumbotron>
      <Jumbotron>
        {/* <h1>Staff List</h1> */}
        <section className="sect-container">
        <h2>
          Check out your Assets
        </h2>
        <p>
          <Link to="/assets">
          <Button variant="primary">Check out</Button></Link>
        </p>
        </section>
      </Jumbotron>
      <Jumbotron>
        {/* <h1>Staff List</h1> */}
        <section className="sect-container">
        <h2>
          Check out your Business performance
        </h2>
        <p>
          <Link to="/analyser">
          <Button variant="primary">Check out</Button></Link>
        </p>
        </section>
      </Jumbotron>
      <Jumbotron>
        {/* <h1>Staff List</h1> */}
        <section className="sect-container">
        <h2>
          Check out the latest news
        </h2>
        <p>
          <Link to="/newsFeed">
          <Button variant="primary">Check out</Button></Link>
        </p>
        </section>
      </Jumbotron>
      {/* <div className="row  my-2">
        <Cards_HomePage
          title="Staffs"
          imageURL="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_1280.jpg"
        />
        <Cards_HomePage
          title="Project"
          imageURL="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
          link="/projects"
        />
      </div>
      <div className="row d-flex flex-wrap my-2">
        <Cards_HomePage
          title="Asset "
          imageURL="https://cdn.pixabay.com/photo/2018/05/23/04/33/cryptocurrency-3423267__340.jpg"
          link="/assets"
        />
      </div>
      <div className="row d-flex flex-wrap my-2">
        <Cards_HomePage
          title="Analyse Business"
          imageURL="https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712__340.jpg"
          link="/analyser"
        />
      </div>
      <div className="row d-flex flex-wrap">
        <Cards_HomePage
          title="News Feed"
          imageURL="https://cdn.pixabay.com/photo/2019/03/27/09/42/finance-4084632__340.jpg"
          link="/newsFeed"
        />

      </div> */}
    </div>
  );
}

export default HomePage;
