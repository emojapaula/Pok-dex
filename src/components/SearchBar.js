import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";
import "../styles/index.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbox">
        <input
          className="searchtxt"
          type="text"
          placeholder="Find your Pokémon"
          onChange={(e) => this.props.onChangeSearch(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="searchbtn" />
      </div>
    );
  }
}

export default SearchBar;
