import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from 'react-bootstrap/Button'

require("./AaJumbotron.scss");

class AaJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var jumbotronstyles = {
      backgroundImage: `url(${this.props.featuredimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60vh"
    };
    return (
      <Jumbotron className="aaJumbotron" style={jumbotronstyles}>
        <div className="jumbotron-container">
          <div className="container">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            {this.props.link ? (
              <p>
                <a href={this.props.link}>
                  <Button bsStyle="primary">Learn more →</Button>
                </a>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default AaJumbotron;
