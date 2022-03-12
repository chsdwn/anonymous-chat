import React from 'react'
import { useSubscription } from '@apollo/client'
import { MessageInput, Messages } from '.'
import { GET_MESSAGES } from '../graphql/subscriptions'
import { generateGUID } from '../utils'

import Box from '@mui/material/Box'

const guid = generateGUID()

export const Chat = () => {
  const { data } = useSubscription(GET_MESSAGES)

  console.log(data)

  return (
    <Box
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#444',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Messages guid={guid} messages={data?.messages} />
      <MessageInput guid={guid} />
    </Box>
  )
}
