import "./about.css";
import me from "../../assets/menw.png"; 
import React from "react";



export default function About() {
    return (
        <div>
        <img src={me} height='750px' width='1000px' alt="me" className="img" />
            <div className="rounded-border" >
                <p1>About Me</p1>
            </div>
            
            <div className="about">
                <p>
                

I am an IT undergraduate at the Sri Lanka Institute of Information Technology. competent with the scope of information
technology particularized to computer science, graphic design, full-stack developing,
web design, cloud computing, and digital marketing are all areas of expertise.
passionate about making people's lives easier and upgrading humanity.

                
                </p>
                
                </div>
                
                <br></br>
               <p2>
                Name :
               </p2>

               <p2>
                Email :
               </p2>
               <br></br>
                
               <p3>
                Achintha Gamalath
               </p3>
               <p4>
                augamlath@gmail.com
               </p4>
               <br></br>
               <br></br>
               <p2>
                Occupation :
               </p2>
               <p5>
                Contact :
               </p5>
               <br></br>
                
               <p3>
                Full Stack Developer
               </p3>
               <p6>
                +9475-8846449
               </p6>

         </div>
         
    )
    }