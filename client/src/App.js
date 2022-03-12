import React from 'react'
import { Chat } from './components'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

export const App = () => {
  return (
    <>
      <CssBaseline />

      <Container style={{ padding: 0, maxWidth: '100vw' }}>
        <Chat />
      </Container>
    </>
  )
}

export default App
