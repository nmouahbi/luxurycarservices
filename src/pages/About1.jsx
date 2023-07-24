import React from "react";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/about.css";
import cardData from "../assets/data/cardData";

const About1 = () => {
  return (
    <div className="container1">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img
            src={card.image.default}
            className="card-img-top"
            alt={card.title}
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
            <p className="card-text">
              <small className="text-muted">{card.lastUpdated}</small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About1;
