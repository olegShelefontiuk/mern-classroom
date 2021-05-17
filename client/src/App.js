import React from "react"
import {BrowserRouter} from "react-router-dom";
import theme from "./theme";
import MainRouter from "./MainRouter";
import {ThemeProvider} from '@material-ui/core'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainRouter />
            </ThemeProvider>
        </BrowserRouter>
    )}

export default App;