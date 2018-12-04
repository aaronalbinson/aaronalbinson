import React from "react";
import { Link } from "gatsby";

require("./About.scss");

class AaNewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <div className="about">
        <div className="aboutItem">
          <h2>Knowledge</h2>
          <p>
            I'm an advocate of open source projects. I think that an open web
            creates a much happier and successful community online. I build
            bespoke websites in both Wordpress and Drupal and many other
            platforms.
          </p>
          <p>
            As well as building websites I'm also skilled in building for all
            devices. Whether that's responsive websites, progressive web apps or
            native Android and iOS apps.
          </p>
        </div>
        <div className="aboutItem">
          <h2>Knowledge</h2>
          <p>
            I'm an advocate of open source projects. I think that an open web
            creates a much happier and successful community online. I build
            bespoke websites in both Wordpress and Drupal and many other
            platforms.
          </p>
          <p>
            As well as building websites I'm also skilled in building for all
            devices. Whether that's responsive websites, progressive web apps or
            native Android and iOS apps.
          </p>
        </div>
        <div className="aboutItem">
          <h2>Knowledge</h2>
          <p>
            I'm an advocate of open source projects. I think that an open web
            creates a much happier and successful community online. I build
            bespoke websites in both Wordpress and Drupal and many other
            platforms.
          </p>
          <p>
            As well as building websites I'm also skilled in building for all
            devices. Whether that's responsive websites, progressive web apps or
            native Android and iOS apps.
          </p>
        </div>
        <Button bsStyle="primary">Keep Reading →</Button>
      </div>
    );
  }
}

export default AaNewsItem;
