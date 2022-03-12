const { RedisPubSub } = require('graphql-redis-subscriptions')
const Redis = require('ioredis')

const options = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || '6379',
  password: process.env.REDIS_PASSWORD || '',
  retryStrategy: (times) => Math.min(times * 50, 2000)
}

module.exports = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
})
