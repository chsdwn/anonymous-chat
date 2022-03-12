import React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'

export const Message = ({ text, self }) => {
  return (
    <Box
      style={{
        padding: 8,
        borderRadius: 8,
        backgroundColor: self ? '#7B113A' : '#171717',
        width: 'max-content',
        marginBottom: 16,
        maxWidth: '80%',
        alignSelf: self ? 'flex-end' : null
      }}
    >
      {text}
    </Box>
  )
}

Message.propTypes = {
  text: PropTypes.string,
  self: PropTypes.bool
}
Message.defaultProps = {
  self: false
}
