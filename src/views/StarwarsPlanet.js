import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

const StarwarsPlanet = ({ id }) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://swapi.dev/api/planets/${id}
`
    ).then((response) => {
      setPlanet(response.data);
      console.log(response.data);
    });
  }, [id]);

  if (planet == null) {
    return "Loading....";
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      {/* <p>Height: {planet.height}</p>
      <p>Weight: {planet.mass}</p>
      <p>Gender: {planet.gender}</p>
      <p>Skin color: {planet.skin_color}</p> */}
    </div>
  );
};

export default StarwarsPlanet;
