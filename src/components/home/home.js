import React from "react";
import Globe from "../../image/globe.svg";
import "./home.css";
import Card from "../card/card.js";
import data from "../../data";

function home() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        location={card.location}
        mapurl={card.googleMapsUrl}
        title={card.title}
        startDate={card.startDate}
        endDate={card.endDate}
        description={card.description}
        imgUrl={card.imageUrl}
      />
    );
  });

  return (
    <div>
      <header className="header-section">
        <img src={Globe} alt="Globe Image" />
        <h3>My Travel Journal</h3>
      </header>
      <main className="main-section">{cards}</main>
    </div>
  );
}

export default home;
