import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Message } from './Message'

import Box from '@mui/material/Box'

export const Messages = ({ guid, messages }) => {
  const scrollRef = useRef()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
  }, [messages])

  return (
    <Box style={{
      padding: 16,
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }}
    >
      {messages?.map((message, index) => (
        <Message
          key={`${index}-${message}`}
          text={message.text}
          self={message.userId === guid}
        />
      ))}
      <div ref={scrollRef} />
    </Box>
  )
}

Messages.propTypes = {
  guid: PropTypes.string,
  messages: PropTypes.array
}
