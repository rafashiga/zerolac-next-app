import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'aos/dist/aos.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  ReactGA.initialize('UA-149483264-4')

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
