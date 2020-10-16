import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/lib/Button";

require("./AaNewsItem.scss");

class AaNewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="AaNewsItem">
        <Link to={this.props.slug}>
          <div className="blog-container">
            <div className="blog-post-title">
              <h3>{this.props.title}</h3>
              <p>{this.props.excerpt}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AaNewsItem;
