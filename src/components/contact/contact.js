import "./contact.css";
export function Contact(){
    return(
        <div className="contact_container" id="contact">
               <h1 className="fw-bold  text-center ">Get In Touch</h1>
               <div className="container">
                <div className="row">
                    <div className="col-md-4  ">
                        <div className="text-start">
                        <h3 className="fw-bold ">Let's talk about everything!</h3>
                        <p className="fw-bold ">Don't like forms? Send me an <a href="mailto:name@example.com">email</a>. 👋</p>
                        </div> 
                    </div>
                    <div className="col-md-8">
                          <Fo/>
                    </div>
                </div>
               </div>
        </div>
    )
}
  function Fo(){
    return(
        <form>
            <div className="container">
               <div className="row">
                  <div className="col-6">
                   <input type="text" className="form-control m-2 " id="exampleInputPassword1" placeholder="Your name"/>
                  </div>
                  <div className="col-6">
                 
                   <input type="email" className="form-control m-2" id="exampleInputPassword1" placeholder="Your email address"/>
                  </div>
               </div>
               <div className="row">
                  <div className="column">
                   <input type="password" className="form-control m-2" id="exampleInputPassword1" placeholder="Subject"/>
                  </div>
               </div>
               <div className="row">
                   <div className="column">
                   <input type="" className="form-control m-2" id="exampleInputPassword1" placeholder="Message"/>
                   </div>
               </div>
               <div className="row">
                    <div className="column">
                    <button type="button" className="btn btn-danger m-2  fw-bold">Send Message</button>
                    </div>
               </div>
            </div>
       </form>
    )
  }