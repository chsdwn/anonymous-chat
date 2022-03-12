import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import PropTypes from 'prop-types'
import { CREATE_MESSAGE } from '../graphql/mutations'

import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'

export const MessageInput = ({ guid }) => {
  const [createMessage, { loading }] = useMutation(CREATE_MESSAGE)

  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleMessageSend = async () => {
    setText('')
    await createMessage({
      variables: {
        message: {
          userId: guid,
          text
        }
      }
    })
  }

  useEffect(() => {
    const enterListener = (event) => {
      if (event.key === 'Enter') {
        handleMessageSend()
      }
    }
    window.addEventListener('keyup', enterListener)
    return () => {
      window.removeEventListener('keyup', enterListener)
    }
  })

  return (
    <Box style={{
      paddingTop: 8,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: '#aaa',
      textColor: 'white',
      display: 'flex'
    }}
    >
      <TextField
        value={text}
        onChange={handleTextChange}
        label='Your message'
        variant='standard'
        fullWidth
      />
      <IconButton aria-label='send' onClick={handleMessageSend} disabled={loading}>
        <SendIcon />
      </IconButton>
    </Box>
  )
}

MessageInput.propTypes = {
  guid: PropTypes.string
}
