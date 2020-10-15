import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import { slide as Menu } from "react-burger-menu";

require("./Navbar.scss");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <nav className="is-transparent main-nav">
        <StaticQuery
          query={graphql`
              query {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "menu" } } }
                ) {
                  totalCount
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        menupath
                      }
                    }
                  }
                }
              }
            `}
          render={data => (
            <ul>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link className="navbarItem" to={node.frontmatter.menupath}>
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        />

      </nav>
    );
  }
}

export default Navbar;
