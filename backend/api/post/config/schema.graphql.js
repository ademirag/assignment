module.exports = {
  query: `
    getBySlug(slug: String!): [Post]!
    postCount: Int!
  `,
  resolver: {
    Query: {
      getBySlug: {
        description: "Post by giving slug",
        resolver: "application::post.post.getBySlug"
      },
      postCount: {
        description: "Total amount of posts",
        resolverOf: "application::post.post.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.post.services.post.count({});
        }
      }
    }
  }
};
