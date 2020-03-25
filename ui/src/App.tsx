import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './Components/Header'
import Data from './Components/Data'

const App: React.FC = () => {
    return (
        <Fragment>
            <GlobalStyle></GlobalStyle>
            <Header />
            <Data />
        </Fragment>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0 auto;
        font-family: Trebuchet MS1, Trebuchet MS, sans-serif;
    }
`

export default App