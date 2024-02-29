import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GlobalStyle from "@theme/GlobalStyle"
import { LoadingPage } from './components'
import { ThemeProvider } from 'styled-components'
import useLocoScroll from '@hooks/useLocoScroll'
import AppRouter from '@modules/AppRouter/AppRouter'

function App() {

  // useLocoScroll(true);

  return (
    <div>

      <GlobalStyle />
      {/* <h1>dsfogids dsfgod</h1> */}

      {/* <ThemeProvider>
    <div data-scroll-container className="App">
    </div>
    </ThemeProvider> */}
      <AppRouter />
      
    </div>
  )
}

export default App
