import React from "react";
import { Link } from "gatsby";

require("./AaNewsListItem.scss");

class AaNewsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="AaNewsListItem">
        <Link to={this.props.slug}>
          {this.props.title}
        </Link>
      </div>
    );
  }
}

export default AaNewsListItem;
