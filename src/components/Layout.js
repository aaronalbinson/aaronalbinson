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
                  linkedin
                  github
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
            {/* <Navbar socialLinks={node.frontmatter.sociallinks} /> */}
            <div className="page-container">
              <div className="left-menu">
                <svg width="15" height="58" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="7.5" fill="#2B3335" /><circle cx="7.5" cy="28.5" r="7.5" fill="#2B3335" /><circle cx="7.5" cy="50.5" r="7.5" fill="#2B3335" /></svg>
              </div>
              <div className="logo">
                <svg width="59" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.277 37.71H38.36L36.387 44h-6.68l10.977-30.04h6.289L58.047 44H51.27l-1.993-6.29zm-1.425-4.472l-3.223-10.195-.84-3.066-.86 3.066-3.183 10.195h8.106z" fill="#949494" /><path d="M.24 39.86c1.04 0 1.9-.3 2.58-.9.72-.6 1.28-1.32 1.68-2.16.4-.88.9-2.14 1.5-3.78L17.7.92h4.2l12.78 32.7c.32.8.66 1.8 1.02 3 .36 1.16.58 2.14.66 2.94 1.32-.12 2.48-.18 3.48-.18V44H23.7v-3.96c1.92 0 2.88-.8 2.88-2.4 0-.8-.22-1.76-.66-2.88l-1.2-3.3-13.02.24-.96 2.82c-.12.32-.4 1.04-.84 2.16-.4 1.12-.76 2.02-1.08 2.7 1.28-.12 2.7-.18 4.26-.18V44H.24v-4.14zM23.22 27.2l-2.76-7.5c-1.16-3.28-1.92-6.02-2.28-8.22h-.06c-.64 2.88-1.38 5.52-2.22 7.92l-2.7 7.8h10.02z" fill="#fff" /></svg>
              </div>
              <div id="page-wrap">
                {children}
              </div>
            </div>

            {/* <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            /> */}
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
