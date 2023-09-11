
import "./navbar.css" ;
import { useState } from "react";
export function Header(){
    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
    return(
     <div className="container">
        <div className="row">
          <div className="column nav">
            <a href="#" className="brand fw-bold"><h1>Ravi</h1></a>
            <ul className={active}>
                <li className="nav_item"><a href="#home" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">about</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">Skills</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">Service</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">Experience</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">Works</a></li>
                <li className="nav_item"><a href="#home" className="nav_link">Contact</a></li>
            </ul>
            <div onClick={navToggle} className={icon}>
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>
            </div>
          </div>
        </div>
     </div>
    )
}
