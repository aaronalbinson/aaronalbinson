import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AaNewsItem from "../components/AaNewsItem/AaNewsItem";

require("../styles/main.scss");

export default class Infos extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <div>

          <section className="section news">
            <div className="container about-bottom">
              <div className="blog-title">
                <h2>Articles</h2>
              </div>
              <div className="articles">
                {posts.map(({ node: post }) => (
                  <AaNewsItem
                    id={post.id}
                    slug={post.fields.slug}
                    title={post.frontmatter.title}
                    image={post.frontmatter.blogImage}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                    moreText="Read →"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

Infos.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query InfosQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            blogImage
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
