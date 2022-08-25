/**
 * Copyright 2022 isobar. All Rights Reserved.
 *
 * */
"use strict"

import fastify from 'fastify'
import route from './route'
import dbConnector from './db-connector'

const app = fastify({
  logger: true
})

app.register(dbConnector)
app.register(route)

app.ready(()=>{
  console.log(app.printRoutes())
})

export default async (req, res) => {
  // Emitting request event to fastify server
  app.server.emit('request', req, res)
}
