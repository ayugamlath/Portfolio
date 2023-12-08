import "./home.css";
import ReactTyped from "react-typed";
import * as React from 'react';
import cap from "../../assets/cap.svg"; 
import { Fade,  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../footer";
import { ThemeProvider } from '@mui/system';
import Paper from '@mui/material/Paper';


import { Grid,  } from '@mui/material';

const images = [
    { url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"},
    { url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    
  ];

export default function Home() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
  
    const jsx = `
  <Grid container spacing={${spacing}}>
  `;
    return (
        <div >
        <SimpleImageSlider
        width={"100%"}
        height={"100%"}
        images={images}
        showBullets={true}
        showNavs={false}
        style={{position: "absolute",zIndex: "-1", marginTop: "-150px", transition: "opacity 2s ease-in-out", transitionProperty: "opacity"}}
        autoPlay={true}
        loop={true}
        autoPlayDelay={5}
        transition={Fade}

      />
     
            {/* <img src={home}  alt="me" className="homeimg" height='790px' width='1535px'/> */}
        <div className="nme">
        I'm Achintha Gamlath
        
        </div>
        
        <br></br>
        <h1>I'm a {""}
        
        <ReactTyped strings={["Full Stack Developer ","Web Designer","Graphic Designer"]} backSpeed={30} typeSpeed={70} loop className="type" />
        </h1>
        <h1 className="resume">
            My Resume
        </h1>
        <h3 className="h3">Undergraduate at Sri Lanka Institute Of Information Technology.</h3>
        <br></br>
        <br></br>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
            <Grid Item xs={5}>
                <p className="grid1">
                <img src={cap} height='20px' alt=""></img>
                   | Bachelor's Degree</p>
                   <p className="grid2"> 06.2021 - 06.2025 </p>
                   <p className="grid3">Undergraduate</p>
                   <p className="grid4">Bsc.(hons) in Information Technology (Special)</p>
                
                
                
            </Grid>
            <Grid Item xs={6}>
            <p className="grid1">
                <img src={cap} height='20px' alt="" ></img>
                   | NVQ Level 4 Certificate</p>
                   <p className="grid2"> 06.2021 - 06.2025 </p>
                   <p className="grid3">Completed</p>
                   <p className="grid4">Computer Graphics</p>
                   <br></br>
            </Grid>
            <Grid Item xs={5}>
            <p className="grid1">
                <img src={cap} height='20px'alt="" ></img>
                   | NVQ Level 2 Certificate</p>
                   <p className="grid2"> 06.2021 - 06.2025 </p>
                   <p className="grid3">Completed</p>
                   <p className="grid4">English</p>
            </Grid>
            <Grid Item xs={6}>
            <p className="grid1">
                <img src={cap} height='20px'alt="" ></img>
                   | Bachelor's Degree</p>
                   <p className="grid2"> 06.2021 - 06.2025 </p>
                   <p className="grid3">Undergraduate</p>
                   <p className="grid4">Bsc.sp (hons) in Information Technology</p>
            </Grid>

  
</Grid>
<br></br>
 
        
<div className="rectangle" >

            <h1 className="service">
                My Services
            </h1>
            <h3 className="h3">
            Full-Stack Development, Graphic Design, Web Design, Cloud Computing, and Digital Marketing .
            </h3>
            <br></br>
            <br></br>
            <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#4e342e',
            dark: '#424242',
            str:'#4e342e',
          },
        },
      }}
    >

</ThemeProvider> 
         
            
            {/* <Grid container spacing={5} rowSpacing={2} > */}
            {/* <Grid Item xs={3} md={3} sx={{'&:hover': {bgcolor: 'primary.dark',},border: '1px solid #ffb700',marginLeft:'200px',borderRadius:'18px',marginBottom:'7px',marginTop:'5px'}}>
                <p className="ui1">
                <img src={cap} height='20px' alt="" style={{marginRight:'18px'}}></img>
                    UI|UX DESIGNING
                   </p>
                
            </Grid> */}
            <Grid Item xs={3} sx={{marginLeft:'100px',marginBottom:'7px',marginTop:'5px',borderRadius:'18px'}}>
            <Grid container justifyContent="center" spacing={spacing}>
                
            {[0, ].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 400,
                  backgroundColor: 'transparent',
                  border: '1px solid #ffb700',
                  '&:hover': {bgcolor: 'gray',flexGrow: 3},
                  
                }}
              >
                <p className="ui1">
                <img src={cap} height='20px' alt="" style={{marginRight:'18px'}}></img>
                  FULLSTACK DEVELOPMENT
                   
                   </p>
              </Paper>
            </Grid>
          ))}
          {[1, ].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 400,
                  backgroundColor: 'transparent',
                  border: '1px solid #ffb700',
                  '&:hover': {bgcolor: 'gray',flexGrow: 3},
                  
                }}
              >
                <p className="ui1">
                <img src={cap} height='20px' alt="" style={{marginRight:'18px'}}></img>
                    GRAPHIC DESIGNING
                   
                   </p>
              </Paper>
            </Grid>
          ))}
          {[2 ].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 400,
                  backgroundColor: 'transparent',
                  border: '1px solid #ffb700',
                  '&:hover': {bgcolor: 'gray',flexGrow: 3},
                  
                }}
              >
                <p className="ui1">
                <img src={cap} height='20px' alt="" style={{marginRight:'18px'}}></img>
                    UI|UX DESIGNING
                   
                   </p>
              </Paper>
            </Grid>
          ))}
                
                
            {/* </Grid> */}
            </Grid>
           
            
      
    </Grid>
           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
            <Footer />
        </div>
    )
    }