import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
// import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
// import Details from './pages/Details/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Register/>
      {/* <Login/> */}
      {/* <Details /> */}
    </ThemeProvider>
  </React.StrictMode>
)
