import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

const StarwarsPeople = ({ id }) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    Axios.get(`https://swapi.py4e.com/api/people/${id}`).then((response) => {
      setPerson(response.data);
      console.log(response.data);
    });
  }, [id]);

  if (person == null) {
    return "Loading....";
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Height: {person.height}</p>
      <p>Weight: {person.mass}</p>
      <p>Gender: {person.gender}</p>
      <p>Skin color: {person.skin_color}</p>
    </div>
  );
};

export default StarwarsPeople;
