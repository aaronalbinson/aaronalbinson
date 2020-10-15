import React from "react";

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
        <a href={this.props.slug}>
          {this.props.title}
        </a>
      </div>
    );
  }
}

export default AaNewsListItem;
