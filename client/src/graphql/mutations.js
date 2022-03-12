import { gql } from '@apollo/client'

export const CREATE_MESSAGE = gql`
  mutation createMessage($message: CreateMessageInput!) {
  createMessage(message: $message) {
      userId
    }
  }
`

export const mutations = {
  CREATE_MESSAGE
}

export default mutations
