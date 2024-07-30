import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
// import Login from './pages/Login/Login.jsx'
import GlobalStyles from './styles/global.js'
import Details from './pages/Details/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details/>
      {/* <Login /> */}
    </ThemeProvider>
  </React.StrictMode>
)
