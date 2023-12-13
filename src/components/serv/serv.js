import "./serv.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Serv(){
    const images=["https://bolby-react.vercel.app/images/service-1.svg","https://bolby-react.vercel.app/images/service-2.svg","https://bolby-react.vercel.app/images/service-3.svg"]
    return(
        <div className="serv_container" id="service">
               <h1 className="fw-bold  text-center">Services</h1>
               <div className="container cardss">
       <div className="row ">
               <div className="col-md-6 col-xl-4"><Cardd1/></div>
               <div className="col-md-6  col-xl-4 "><Cardd2/></div>
               <div className="col-md-6 col-xl-4 "><Cardd3/></div>
      </div>
      </div>
      <p>Looking for a custom job?<span><a href="https://drive.google.com/file/d/1Yxmj9t-hyiccD8OEQ_McU_rILKcnZF48/view?pli=1" target="blank">Hire Me</a></span> to contact me! 👋</p>
      </div>
    )
}

function Cardd1() {
  return (
    <div className="card_container1 ">
           <img src="https://bolby-react.vercel.app/images/service-1.svg " className="card_img1"/>
           <h5 className="fw-bold">UI/UX </h5>
           <p className="fw-bold">I am more interested to do in UI/UX develop using Bootstrab and React js and css</p>
    </div>
  );
}
function Cardd2() {
  return (
    <div className="card_container2">
           <img src=" https://bolby-react.vercel.app/images/service-2.svg" className="card_img2"/>
           <h5 className="fw-bold">Application Development</h5>
           <p>interested to buil Aoolication front-end and back-end using React js, MongoDB, Node js,Express.Js.</p>
    </div>
  );
}
function Cardd3() {
  return (
    <div className="card_container3">
          <img src="https://bolby-react.vercel.app/images/service-3.svg " className="card_img3"/>
           <h5 className="fw-bold">Photography</h5>
           <p>i am interested to take a picture in Mobile Photography </p>
    </div>
  );
}

