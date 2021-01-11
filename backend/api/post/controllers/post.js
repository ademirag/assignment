"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async getBySlug(ctx) {
    let entities = await strapi.services.post.find({
      slug: ctx.query._slug,
      _limit: 1
    });

    return entities;
  }
};
