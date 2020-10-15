import React from "react";
import Button from "react-bootstrap/lib/Button";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <footer className="aafooter">
        Footer
      </footer >
    );
  }
}

export default AaFooter;
