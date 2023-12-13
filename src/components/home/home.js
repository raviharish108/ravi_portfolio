import "./home.css";
import Button from 'react-bootstrap/Button';

export function Home(){
    return(
        <div className="home_container" id="home">
              <img src="assets/ravi.jpg" className="home_img"/>
              <h2 className="fw-bold">Ravi.</h2>
              <div className="p_container">
              <p className="lh-lg fw-medium typed-out">I am a developer</p>
              </div>
            <ul>
                <li ><a href="mailto:raviharish108@gmail.com" target="blank"><i class="bi bi-envelope-at-fill icon" style={{ fontSize: 25 }}  ></i></a></li>
                <li ><a href="https://www.linkedin.com/in/ravindran-ravi-280a60241/" target="blank"><i class="bi bi-linkedin icon" style={{ fontSize: 25 }}></i></a></li>
                <li ><a href="https://github.com/raviharish108/" target="blank"><i class="bi bi-bi bi-github icon" style={{ fontSize: 25 }}></i></a></li>
            </ul>
              <Button variant="danger"><a href="https://drive.google.com/file/d/1Yxmj9t-hyiccD8OEQ_McU_rILKcnZF48/view?pli=1" target="blank" className="bg-danger fw-bold">Hire Me</a></Button>
              
        </div> 
    )
}