import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Helmet } from 'react-helmet'

const Post = ({ data: { post, site } }) => {
  return (
    <>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta
          name="description"
          content={site.siteMetadata.description}
        />
      </Helmet>

      <RichText render={post.data.post_body.raw}/>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostByUid($slug: String!){
    site {
      siteMetadata {
        title
        description
      }
    }
    post: prismicPost(uid: {eq: $slug}) {
      data {
        post_title {
          raw
        }
        post_image {
          fluid(maxWidth: 1000) {
            srcWebp
          }
        }
        post_body {
          raw
        }
      }
      first_publication_date
      uid
      last_publication_date
    }
  }
`;