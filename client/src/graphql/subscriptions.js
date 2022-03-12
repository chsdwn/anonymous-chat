import { gql } from '@apollo/client'

export const GET_MESSAGES = gql`
  subscription getMessages {
    messages {
      userId
      text
    }
  }
`

export const subscriptions = {
  GET_MESSAGES
}

export default subscriptions
