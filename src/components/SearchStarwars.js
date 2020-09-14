import React, { useState } from "react";
import { navigate } from "@reach/router";

const SearchStarwars = (props) => {
  const [state, setState] = useState({
    selectedOption: "people",
    searchId: "",
  });

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    return navigate("/" + state.selectedOption + "/" + state.searchId);
  };

  return (
    <form style={{ margin: "10px" }} onSubmit={onSubmitHandler}>
      <label>Search For:</label>

      <select
        name="selectedOption"
        onChange={onChangeHandler}
        style={{ margin: "0px 10px" }}
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>

      <label>ID:</label>
      <input
        name="searchId"
        onChange={onChangeHandler}
        style={{ margin: "0px 10px", width: "50px" }}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchStarwars;
