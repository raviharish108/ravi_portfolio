import "./skills.css"
export function Skills(){
    return(
        <div className="skills_container" id="skills">
             <h1 className="fw-bold  text-center">Skills</h1>
             <div className="container">
       <div className="row  ">
               <div className="col-md-3 col-6">
                 <Comp link="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://image.pngaaa.com/896/2507896-middle.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://www.pngfind.com/pngs/m/683-6833893_node-js-logo-png-transparent-png.png"/>
                </div>
                <div className="col-md-3 col-6">
                 <Comp link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQgNmBtnXSSb_48225t8xGomoAjj2Vxrr9Q&usqp=CAU"/>
                </div>
      </div>
      </div>
        </div>
    )
}
function Comp({link}){
    return(
        <div className="client_item">
        <div className="inner"><img src={link} style={{ position: 'absolute', opacity: 0.3}} className="img"/></div>
        </div>
    )
}