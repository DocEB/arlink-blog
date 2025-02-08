import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <main>
      <h1>Welcome to My Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <small>{post.frontmatter.date}</small>
          <p>{post.frontmatter.description}</p>
        </article>
      ))}
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`

export default IndexPage