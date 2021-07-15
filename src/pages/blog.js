import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <SEO title="My Blog Post" description="This page gives an overview of all the blog posts." />
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}
export const query = graphql`
query {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        body
        excerpt
      }
    }
  }
`

export default BlogPage