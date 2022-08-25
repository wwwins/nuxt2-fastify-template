"user strict"

import fp from 'fastify-plugin'

const MONGO_URI = process.env.MONGO_URL

async function dbConnector (fastify, options) {
  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: MONGO_URI
  })
}

export default fp(dbConnector)
