import "./footer.css"
import { Grid } from '@mui/material';
import cap from "../assets/cap.svg"; 
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 1 }}>
    <Grid Item xs={3}>
            <p className="p">
                <img src={cap} height='20px'alt="" style={{marginRight:'8px'}} ></img>
                   +9475-8846449</p>
                   
                   
            </Grid>
            <Grid Item xs={4}>
            <p className="p">
                <img src={cap} height='20px'alt="" style={{marginRight:'8px'}} ></img>
                   augamlath@gmail.com</p>
                   
                   
            </Grid>
            <Grid Item xs={4}>
            <p className="p">
                <img src={cap} height='20px'alt="" style={{marginRight:'8px'}}  ></img>
                   <a href="https://www.wisive.net" target="blank" style={{textDecoration:'none', color:'white',}} >www.augamlath.com</a></p>
                   
                   
            </Grid>
            </Grid>
            <SocialIcon a href="https://bit.ly/40W19wv" url="www.facebook.com" bgColor="none" fgColor="white" target="blank" className="icons"/>
            <SocialIcon href="https://bit.ly/3N1tDiW" url="www.instagram.com" bgColor="none" fgColor="white" target="blank"/>
            <SocialIcon href="https://bit.ly/47sfvHG" url="www.linkedin.com" bgColor="none" fgColor="white" target="blank"/>
            <SocialIcon href="https://bit.ly/3G4Wqzh" url="www.github.com" bgColor="none" fgColor="white" target="blank"/>
            <br></br>
    {`Copyright © ${year} | All Rights Reserved AUG `}</footer>;
  };
  
  export default Footer;