// redis.js (Server-side code)
const redis = require("redis");
const util = require("util");

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

const getAsync = util.promisify(redisClient.get).bind(redisClient);
const setexAsync = util.promisify(redisClient.setex).bind(redisClient);

module.exports = { redisClient, getAsync, setexAsync };
