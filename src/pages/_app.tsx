import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'aos/dist/aos.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tabbar from '../components/Tabbar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
      <Tabbar />
    </ThemeProvider>
  )
}

export default MyApp
