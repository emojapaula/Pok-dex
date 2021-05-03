import React from "react";
import Navbar from "./Navbar";
import "../styles/DetailsDisplay.css";

class DetailsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: undefined };
  }
  componentDidMount() {
    console.log(this.props.location.state);
  }

  render() {
    console.log(this.props.location.state.pokemon);
    return (
      <div>
        <Navbar></Navbar>
        <div style={{ marginTop: "75px", width: "300%" }}>
          <span className="title">
            {this.props.match.params.name} information:
          </span>
          <div className="specs">
            height: {this.props.location.state.pokemon.height} dm
            <br />
            weight: {this.props.location.state.pokemon.weight} hg
            <br />
            <br />
            If you defeat this Pokemon you will get:
            {this.props.location.state.pokemon.base_experience} xp
            <br />
            <br />
            List of abilities:
            <ul>
              {this.props.location.state.pokemon.abilities.map((ability) => (
                <li>{ability.ability.name}</li>
              ))}
            </ul>
            Pokemon type:
            <ul>
              {this.props.location.state.pokemon.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsDisplay;
/*<img
              src={
                this.props.location.state.pokemon.other.official_artwork
                  .front_default
              }

              <div>
            for each e in {this.props.location.state.pokemon.abilities}
            {<p>{e.name}</p>}
          </div>
            />*/
