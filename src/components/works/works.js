import "./works.css"
export function Works(){
    return(
        <div className="works_container" id="works">
                 <h1 className="fw-bold  text-center ">Recent Projects</h1>
                 <div className="container">
                     <div className="row">
                     <div className="col-lg-4 col-md-6 "><Working1/></div>
                     <div className="col-lg-4 col-md-6"><Working2/></div>
                     <div className="col-lg-4 col-md-6"><Working3/></div>
                     <div className="col-lg-4 col-md-6"><Working4/></div>
                     {/* <div className="col-lg-4 col-md-6"><Working5/></div>
                     <div className="col-lg-4 col-md-6"><Working6/></div> */}
                     </div>
                     
                  </div>   
        </div>
    )
}
function Working1() {
    return (
      <div className="working_card_container1">
        <h3 className="fw-bold text-center">Notes App</h3>
           <p>Notes App will be useful for save important notes.</p>
           <ul>
                <li ><a href="https://github.com/raviharish108/notes_app" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}  ></i></a></li>
                <li ><a href="https://github.com/raviharish108/notesapp" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></a></li>
                <li ><a href="https://enchanting-muffin-2716fa.netlify.app/" target="_blank"> <i class="bi bi-door-open icon" style={{ fontSize: 25 }}></i></a></li>
            </ul>
      </div>
    );
  }
  function Working2() {
    return (
      <div className="working_card_container2">
             <h3 className="fw-bold text-center">School App</h3>
           <p>Scool App will be Useful for Making Admission Simple</p>
           <ul>
           <li ><a href="https://github.com/raviharish108/student-assigning" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}  ></i></a></li>
                <li ><a href="https://github.com/raviharish108/school-management" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></a></li>
                <li ><a href="" target="_blank"> <i class="bi bi-door-open icon" style={{ fontSize: 25 }}></i></a></li>
            </ul>
      </div>
    );
  }
  function Working3() {
    return (
      <div className="working_card_container3">
             <h3 className="fw-bold text-center">Simple App</h3>
           <p>In this application about simple App  </p>
           <ul>
           <li ><a href="https://github.com/raviharish108/password_reset-front-end" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}  ></i></a></li>
                <li ><a href="https://github.com/raviharish108/password_reset" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></a></li>
                <li ><a href="https://stunning-kulfi-7efbbf.netlify.app/register" target="_blank"> <i class="bi bi-door-open icon" style={{ fontSize: 25 }}></i></a></li>
            </ul> 
      </div>
    );
  }
  function Working4() {
    return (
      <div className="working_card_container4">
             <h3 className="fw-bold text-center">Ecommerce App</h3>
           <p>In this Application is useful for shopping</p>
           <ul>
                <li ><a href="https://github.com/raviharish108/ecommerce_frontend" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}  ></i></a></li>
                <li ><a href="https://github.com/raviharish108/commerce" target="_blank"><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></a></li>
                <li ><a href="https://keen-profiterole-2924f8.netlify.app/" target="_blank"> <i class="bi bi-door-open icon" style={{ fontSize: 25 }}></i></a></li>
            </ul> 
      </div>
    );
  }
  // function Working5() {
  //   return (
  //     <div className="working_card_container5">
  //           <h3 className="fw-bold text-center">Project1</h3>
  //          <p>I am shown when someone hovers over the div above.</p>
  //          <ul>
  //               <li ><i class="bi bi-instagram icon" style={{ fontSize: 25 }}  ></i></li>
  //               <li ><i class="bi bi-linkedin icon" style={{ fontSize: 25 }}></i></li>
  //               <li ><i class="bi bi-envelope-at-fill icon" style={{ fontSize: 25 }}></i></li>
  //               <li ><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></li>
  //           </ul>  
  //     </div>
  //   );
  // }
  // function Working6() {
  //   return (
  //     <div className="working_card_container6">
  //           <h3 className="fw-bold text-center">Project1</h3>
  //          <p>I am shown when someone hovers over the div above.</p>
  //          <ul>
  //               <li ><i class="bi bi-instagram icon" style={{ fontSize: 25 }}  ></i></li>
  //               <li ><i class="bi bi-linkedin icon" style={{ fontSize: 25 }}></i></li>
  //               <li ><i class="bi bi-envelope-at-fill icon" style={{ fontSize: 25 }}></i></li>
  //               <li ><i class="bi bi-github icon" style={{ fontSize: 25 }}></i></li>
  //           </ul>   
  //     </div>
  //   );
  // }
 