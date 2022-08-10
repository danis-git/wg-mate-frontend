import './index.css';
import './styles/fonts.css';
import './styles/variables.css';
import './styles/layout.css';
import './styles/buttons.css';
import './styles/header.css';
import './styles/icon.css';
import './styles/error.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    width: "100%",
                    marginBottom: "15px",
                    borderWidth: "2px"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px"
                },
                notchedOutline: {
                    borderWidth: "2px"
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: "100%",
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    width: "100%",
                    borderWidth: "2px"
                }
            }
        }
    },
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
