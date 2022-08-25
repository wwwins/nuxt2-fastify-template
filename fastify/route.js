"use strict"

import { v1 as uuidv1 } from 'uuid';

const COLLECTION_NAME = process.env.COLLECTION_NAME || "wishes";

export default async (fastify, options) => {
  // curl http://localhost:3000/api
  fastify.get("/", async (req, res) => {
    return 'hello fastify'
  })

  // curl http://localhost:3000/api/echo/hello123
  fastify.get("/echo/:username", async (req, res) => {
    return { hello: req.params.username, liffid: process.env.LIFF_ID, server: process.env.SERVER_URL }
  })

  // curl http://localhost:3000/api/id
  fastify.get("/id", async (req, res) => {
    return { id: uuidv1() }
  })

  // curl --request POST http://localhost:3000/api/post/insert -H 'Content-Type: application/json' --data '{"nick":"my_nick","text":"my_text"}'
  const insertOpts = {
    schema: {
      body: {
        type: "object",
        required: ["nick", "text"],
        properties: {
          nick: { type: "string", minLength: 1, maxLength: 15 },
          text: { type: "string", minLength: 1, maxLength: 50 },
        },
      },
    },
  }
  fastify.post("/post/insert", insertOpts, async (req, res) => {
    const nick = req.body.nick;
    const text = req.body.text;
    const currentTime = new Date(new Date().toDateString()).getTime();
    return { id: uuidv1(), nick: nick, text: text, time: currentTime }
  })

  // curl http://localhost:3000/api/mongo/info
  fastify.get("/mongo/info", async (req, res) => {
    const client = fastify.mongo.client;
    const result = await client.db(COLLECTION_NAME).admin().serverInfo();
    return result;
  })

}
