const { GraphQLServer } = require('graphql-yoga')
const pubsub = require('./config/pubsub')

const messages = []

const typeDefs = `
  type Message {
    userId: String!
    text: String!
  }

  input CreateMessageInput {
    userId: String!
    text: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    createMessage(message: CreateMessageInput!): Message!
  }

  type Subscription {
    messages: [Message!]
  }
`

const resolvers = {
  Query: {
    messages: (_, __, { messages }) => messages
  },
  Mutation: {
    createMessage: (_, { message }, { messages }) => {
      messages.push(message)
      pubsub.publish('messages', { messages: messages })
      return message
    }
  },
  Subscription: {
    messages: {
      subscribe: (_, __, { messages, pubsub }) => {
        setTimeout(() => {
          pubsub.publish('messages', { messages: messages })
        })
        return pubsub.asyncIterator('messages')
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    messages,
    pubsub
  }
})

const port = process.env.PORT || 4000
server.start(port, () => console.log(`Running on port ${port}`))
