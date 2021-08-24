const path = require(`path`);

const TurnPostsIntoPages = async ({ graphql, actions }) => {
  const post = path.resolve(`./src/templates/Post.js`)
  const { createPage } = actions

  const { data: { posts: { nodes } } } = await graphql(`
  query {
    posts: allPrismicPost {
      nodes {
        url
        uid
      }
    }
  }
  `);

  for (const node of nodes){ 
    createPage({
        path: '/blog/' + node.uid,
        component: post,
        context: {
          slug: node.uid
        },
      })
  }
}

exports.createPages = async (params) => {
  await Promise.all([
    TurnPostsIntoPages(params),
  ])
};