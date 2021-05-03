import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Display.css";
import { Container, Title, Specs } from "./DisplayElements";
import "../styles/index.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: undefined };
    this.addFavorite = this.addFavorite.bind(this);
  }
  async componentDidMount() {
    await fetch(this.props.url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((pokemon) => {
        this.setState({
          pokemon: pokemon,
        });
      });
  }
  addFavorite() {
    let stored = JSON.parse(localStorage.getItem("favorites", this.props.url));
    console.log(stored);
    if (stored === null || stored === [] || stored.length === 0) stored = [];
    localStorage.setItem(
      "favorites",
      JSON.stringify([...stored, this.props.url])
    );
  }
  removeFavorite() {
    let stored = JSON.parse(
      localStorage.getItem("favorites", this.state.pokemon)
    );
    if (stored !== null || stored !== [] || stored.length !== 0) stored = [];
    localStorage.removeItem(
      "favorites",
      JSON.stringify([...stored, this.state.pokemon])
    );
  }

  render() {
    let stored = JSON.parse(
      localStorage.getItem("favorites", this.state.pokemon)
    );
    console.log(stored);

    return (
      <div className="card" style={{ background: "#8AA29E", text: "white" }}>
        <div className="multi-button">
          <button onClick={this.addFavorite}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          {this.state.pokemon ? (
            <button>
              <Link
                to={{
                  pathname: `/pokemon/${this.state.pokemon.name}`,
                  state: {
                    pokemon: this.state.pokemon,
                  },
                }}
              >
                <FontAwesomeIcon icon={faBars} />
              </Link>
            </button>
          ) : (
            <button>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>

        {this.state.pokemon ? (
          <Container className="container">
            <div className="pictureContainer" style={{ float: "left" }}>
              <img
                src={this.state.pokemon.sprites.front_default}
                alt="Pokemon "
              />
            </div>
            <div
              className="specsContainer"
              style={{ float: "right", paddingRight: "1em" }}
            >
              <Title>name: {this.state.pokemon.name}</Title>
              <Specs>height: {this.state.pokemon.height}</Specs>
              <Specs>weight: {this.state.pokemon.weight}</Specs>
            </div>
          </Container>
        ) : (
          <div
            style={{ textAlign: "right", fontSize: "1.5em", marginTop: "2em" }}
          >
            Oh no! It looks like this card got destroyed!
          </div>
        )}
      </div>
    );
  }
}
export default Display;
