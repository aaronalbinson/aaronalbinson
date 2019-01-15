import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Link } from "gatsby";

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
        {/* <div className="content" key={this.props.id}>
          <p className="AaNewsItemHeader">
            <Link className="has-text-primary" to={this.props.slug}>
              <h3>{this.props.title}</h3>
            </Link>
            <span className="bull"> &bull; </span>
            <small>{this.props.date}</small>
          </p>
          <p>
            {this.props.excerpt}
            <br />
            <br />

            <a href={this.props.slug}>
              <Button bsStyle="primary">Keep Reading →</Button>
            </a>
          </p>
        </div> */}
        <div class="blog-card spring-fever">
          <div class="title-content">
            <h3>{this.props.title}</h3>
            <hr />
            <div class="intro">
              Yllamco laboris nisi ut aliquip ex ea commodo.
            </div>
          </div>
          <div class="card-info">{this.props.excerpt}</div>
          <div class="utility-info">
            <ul class="utility-list">
              <li class="comments">12</li>
              <li class="date">{this.props.date}</li>
            </ul>
          </div>

          <div class="gradient-overlay" />
          <div class="color-overlay" />
        </div>
      </div>
    );
  }
}

export default AaNewsItem;
