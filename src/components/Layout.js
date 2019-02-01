import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "settings" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                companyaddress
                sociallinks {
                  facebook
                  twitter
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Helmet title={node.frontmatter.title} />
            <Navbar />
            <div id="page-wrap">
              <div className="top">
                <Link to="/">
                  <svg
                    width="120"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 173.4 67.74"
                  >
                    <g data-name="Layer 2">
                      <text
                        transform="translate(0 51.36)"
                        font-size="60"
                        fill="#fff"
                        font-family="Muli-SemiBold,Muli"
                        font-weight="700"
                        data-name="Layer 1"
                      >
                        Aa
                        <tspan
                          x="81"
                          y="0"
                          letter-spacing="-.01em"
                          fill="#d6d9d0"
                        >
                          r
                        </tspan>
                        <tspan x="102.96" y="0" fill="#d6d9d0">
                          on
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </Link>
              </div>
              {children}
            </div>

            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
