import React from "react";
import PlacesItem from "../Components/PlacesItem";
import Places from "../Data/Places";
import "../Styles/Menu.css";
import AAA from "../Assets/googlemaps.jpg";

const Menu = () => {
  return (
    <div
      className="menu-page"
      style={{
        backgroundImage: `url(${AAA})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "60px", // optional, to avoid overlap with navbar
      }}
    >
      <div className="menu-container">
        <h1>Locations</h1>
        <div className="locations-list">
          {Places.map((loc) => (
            <PlacesItem
              key={loc.id}
              image={loc.image}
              name={loc.name}
              tel={loc.tel}
              address={loc.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
