import React from "react";
import "../styles/DetailsDisplay.css";

class About extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "75px", width: "300%" }}>
        <span className="title">Paula information:</span>
        <div className="specs">
          Age: 21
          <br />
          <br />
          List of abilities:
          <ul>
            <li>Graceful Programming</li>
          </ul>
          Trainer type:
          <ul>
            <li>Student</li>
            <li>Programer</li>
            <li>nocturnal</li>
          </ul>
          <div></div>
        </div>
      </div>
    );
  }
}
export default About;
