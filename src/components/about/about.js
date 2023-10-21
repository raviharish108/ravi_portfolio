import "./about.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Button from 'react-bootstrap/Button';
export function About(){
    return(
        <div className="about_container" id="about">
             <h1 className="fw-bold  text-center">About Me</h1>
             <div className="container text-center">
             <div className="row">
             <div className=" col-md-4">
             <img src="assets/ravi.jpg" className="about_img"/>
             </div>
             <div className=" col-md-8">
             <div className="box arrow-left">
              <div  className="row about_p ">
                <div className=" col-md-6 about_p ">
                    <p className="about_p fw-normal para">I am Ravi, web App developer from Ramanathapuram, India. I have good experience in App  building and customization.</p>
                    <button type="button" class="btn btn-danger"><a href="https://drive.google.com/file/d/1Z_oBfAayvD8UD8QacsSDfh5aYKvg2avv/view?usp=sharing" target="blank" className="bg-danger fw-bold ">Download CV</a></button>
                </div>
                <div className=" col-md-6 about_p fw-bold ">
                    <p className="about_p bars_right">Development</p>
                    <ProgressBar variant="danger" now={85} id="bar"  />
                    <p className="about_p bars_right">UI/UX Design</p>
                    <ProgressBar variant="warning" now={90} id="bar" />
                    <p className="about_p bars_right">Photography</p>
                    <ProgressBar variant="success" now={70} id="bar" />
                </div>
              </div>
             </div>
             </div>
             </div>
             </div>
        </div>       
    )
}