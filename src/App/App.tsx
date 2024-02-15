import React from 'react'
import { Header } from '../features/Header/Header'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/Global.styled'
import { About } from '../features/about/About'
import { GoTopBtn } from '../components/GoTopBtn'
import { Footer } from '../features/Footer/Footer'
import { Catalog } from '../features/products/Catalog'
import { Route, Routes } from 'react-router-dom'
import { useApp } from './hooks/useApp'
import { LinearProgress } from '@mui/material'

function App() {

    const { theme, themeMode, themeToggle, overflow, handleOverflow, toggleCart,
        isCartOpen, choice, setChoice, status } = useApp()

    return (

        <StyledApp>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle customTheme={theme} overflow={overflow} />
                {status === 'loading' && <LinearProgress color='info' />}
                <Header theme={theme} themeToggle={themeToggle} handleOverflow={handleOverflow}
                        isCartOpen={isCartOpen} toggleCart={toggleCart} choice={choice} />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/catalog" element={<Catalog theme={theme} isCartOpen={isCartOpen}
                                                             handleOverflow={handleOverflow}
                                                             toggleCart={toggleCart}
                                                             choice={choice} setChoice={setChoice} />} />
                </Routes>
                <GoTopBtn theme={theme} />
                <Footer theme={theme} />
            </ThemeProvider>
        </StyledApp>
    )
}

const StyledApp = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;


    background-position: 120% 20%;
    background-repeat: no-repeat;
`


export default App
