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
    var blogStyles = {
      backgroundImage: `url(${this.props.image})`
    };
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
        <div className="blog-card spring-fever" style={blogStyles}>
          <a href={this.props.slug}>
            <div className="blog-card-container">
              <div className="title-content">
                <h3>{this.props.title}</h3>
                <hr />
                <div className="intro">...</div>
              </div>
              <div className="card-info">
                <div>{this.props.excerpt}</div>
              </div>
              <div className="utility-info">
                <ul className="utility-list">
                  {/* <li className="comments">12</li> */}
                  <li>
                    {this.props.date && (
                      <span className="date">{this.props.date}</span>
                    )}
                  </li>
                  <li className="permalink">{this.props.moreText}</li>
                </ul>
              </div>
            </div>

            <div className="gradient-overlay" />
            <div className="color-overlay" />
          </a>
        </div>
      </div>
    );
  }
}

export default AaNewsItem;
