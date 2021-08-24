import React from 'react'
import { graphql } from 'gatsby'

const BlogPage = () => {
  return (
    <>
      <p>the blog page</p>
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    posts: allPrismicPost {
      nodes {
        url
        uid
        data {
          published_at
          post_title {
            html
          }
          post_image {
            fluid(maxWidth: 1000) {
              srcWebp
            }
          }
          post_body {
            html
          }
        }
      }
    }
  }
`