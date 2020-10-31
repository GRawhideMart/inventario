import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

export const theme = createMuiTheme({
    palette: {
        primary: {
            dark: green[900],
            main: green['A400'],
            light: green[500]
        },
        text: {
            primary: green[700],
            secondary: green[900],
            main: '#000000'
        },
        status: {
            danger: red[900]
        }
    }
})