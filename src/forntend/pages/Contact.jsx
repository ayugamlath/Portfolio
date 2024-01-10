import "./contact.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from "../footer";


const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#ffb700',
            '--TextField-brandBorderHoverColor': 'red',
            '--TextField-brandBorderFocusedColor': '#ffb700',
            
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '4px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '4px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '4px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
 
  


export default function Contact() {
    const outerTheme = useTheme();
    return (

        <div>
            <div>
                <h1 className="h1">
                    Contact Me
                </h1>
                <p className="contact">
                Hello, I'm Achintha Gamlath, I'm Studying at Sri Lanka Institute of Information Technology. I'm a Fullstack Developer.
                </p>
                <form className="form">
                    
                        
                    
                <Box
                 component="form"
                    sx={{
                             '& > :not(style)': { m: 3, width: '400px',height:'50px' ,maxWidth: '100%',},
                        }}
                     noValidate
                    autoComplete="off">
                         <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField id="fullWidth" label="Name" variant="standard" color="warning" placeholder="Placeholder" focused/>
                        
                        <TextField id="fullWidth" label="Email" variant="standard" color="warning" placeholder="Placeholder" focused/>
                        <br></br>
                        <br></br>
                        <TextField id="standard-multiline-static" label="Message" color="warning" placeholder="Placeholder" multiline fullWidth  focused rows={4}
                         cols={40}/>
                        
                        </ThemeProvider>
                        </Box>
                        <br></br>
                        <div className="button">
                        <Button variant="contained" type="submit" color="warning" size="large" >SEND MESSAGE</Button>
                       <br></br>
                        </div>
                        
                </form>
                <br></br>
                <br></br>
                    
                    
                
            </div>
            <br></br>
            <Footer />

        </div>
        
    )
    }