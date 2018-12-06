import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/lib/Button";

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
      <div className="container">
        <div className="about columns">
          <div className="aboutItem column knowledge is-6">
            <h2 className="aboutItemTitle">Knowledge</h2>
            <p>
              I'm an advocate of open source projects. I think that an open web
              creates a much happier and successful community online. I build
              bespoke websites in both Wordpress and Drupal and many other
              platforms.
            </p>
            <p>
              As well as building websites I'm also skilled in building for all
              devices. Whether that's responsive websites, progressive web apps
              or native Android and iOS apps.
            </p>
            <a href="/news">
              <Button className="btn" bsStyle="primary">
                Read my blog →
              </Button>
            </a>
          </div>
        </div>
        <div class="about columns">
          <div className="aboutItem column work is-6 is-offset-6">
            <h2 className="aboutItemTitle">Work</h2>
            <p>
              I currently work for a technology company in the centre of
              Manchester but I believe the internet is time zone free so my
              network reaches worldwide.
            </p>
            <p>
              I work on my own projects in my spare time, my more recent project
              is Meanwhile in Manchester, a website and app for events in and
              around Manchester.
            </p>
            {/* <Button className="btn" bsStyle="primary">
              Keep Reading →
            </Button> */}
          </div>
        </div>
        <div class="about columns">
          <div className="aboutItem column is-6 inspire">
            <h2 className="aboutItemTitle">Inspire</h2>
            <p>
              I'm always finding ways to improve my own skills but also
              encourage others to take on new challenges.
            </p>
            <p>
              I regularly attend universities and colleges to inspire younger
              generations into the world of digital.
            </p>
            <p>
              Giving back to the community is very important to me, that's why
              I've recently started a local Code Club for 9-13 year olds.
            </p>
            <a className="btn" href="https://twitter.com/aaronalbinson">
              Message me on twitter →
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AaNewsItem;
