import React from "react";
import "../card/card.css";
import Pointer from "../../image/locationpointer.svg";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div
            className="card-img"
            style={{
              backgroundImage: `url(${props.imgUrl})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={props.imgUrl} alt="" /> */}
          </div>
          <div className="card-data">
            <div className="location-map">
              <div className="location-img-container">
                <img src={Pointer} alt="pointer image" />
                <h2>{props.location}</h2>
              </div>
              <a href={props.mapurl} target="_blank">
                View On Google Maps
              </a>
            </div>
            <h1>{props.title}</h1>
            <h4>
              {props.startDate} - {props.endDate}
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
