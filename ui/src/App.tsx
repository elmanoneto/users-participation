import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './Components/Header'

const App: React.FC = () => {
    return (
        <Fragment>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
        </Fragment>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        padding: 0 auto;
    }
`

export default App