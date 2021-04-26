import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// import {
//   Button,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";

export default function Footer() {
  return (
    // <footer className="footer">
    //   <Container>
    //     <Row>
    //       <Col md="3">

    //         <h1 className="title">SD Works</h1>

    //       </Col>
    //       <Col md="3">
    //         <Nav>
    //           <NavItem>
    //             <NavLink href="https://www.linkedin.com/in/shalom-dawit-a0a5a4126">
    //               Contact: Shalom
    //             </NavLink>
    //           </NavItem>
    //         </Nav>
    //       </Col>
    //       <Col md="3">
    //         <Nav>
    //           <NavItem>
    //             <NavLink to="/" tag={Link}>
    //               Home
    //             </NavLink>
    //           </NavItem>
      
    //           <NavItem>
    //             <NavLink href="https://opensource.org/licenses/MIT">
    //               License
    //             </NavLink>
    //           </NavItem>
    //         </Nav>
    //       </Col>
    //       <Col md="3">

    //         <h3 className="title">Follow Me on GitHub:</h3>

    //         <div className="btn-wrapper profile">
    //           <Button
    //             className="btn-icon btn-neutral btn-round btn-simple"
    //             color="default"

    //             href="https://github.com/mrdawit"
    //             id="tooltip230450801"
    //             target="_blank"
    //           >
    //             <i className="fab fa-github" />
    //           </Button>
    //           <UncontrolledTooltip delay={0} target="tooltip230450801">
    //             Follow Shalom on GitHub

    //           </UncontrolledTooltip>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>

    <>
    {/* <div id="box">
    <footer>
    <div id="text"> SD_WORKS</div>
    <div id="image">
       <img src={require("./juju.png").default} alt={"juju"}/>1/21
    </div>
</footer>
</div> */}
  <footer id="outer_footer" >
 
 <div className="row footerRow">
   
     <div className="col-lg-9  col-md-6 col-sm-6 col-xs-6"/>
   <div id="texting" className="col-lg-3 col-md-6 col-sm-6 col-xs-6">Created By NEW DIGITAL WORLD</div>
   </div>
   <div className="row footerRow">
   <div className="col-lg-10 col-md-10 col-sm-10"/>
   <div id="image" className="col-lg-2 col-md-2 col-sm-2">
   <img alt={"juju"} src={require("./JUJU_ICON.PNG").default}/> 1/21
   </div>
   </div>
</footer>

</>
  );
}