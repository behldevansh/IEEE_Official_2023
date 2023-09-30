import React from "react";
import "./Services.css";
import caslogo from "./images/caslogo.png";
import cslogo from "./images/cslogo.png";
import raslogo from "./images/raslogo.jpeg";
import wielogo from "./images/wielogo.jpg";

function Services() {
  return (
    <div className="services" id="services">
      <div className="services_upper">
        <div className="services_upper_left">
          <div className="services_upper_left_elea">Subdomains</div>
          <div className="services_upper_left_eleb">
            Chapters and Affinity group
          </div>
        </div>
        <div className="services_upper_right">
        Chapters and affinity groups are the key segments of IEEE architecture that provides customized opportunities to students
        </div>
      </div>
      <div className="card_service_wrap">
        <div className="card_service">
          <img src={cslogo} className="svgicon" />
          <div className="card_service_head">CS Chapter</div>
          <div className="card_service_body">
          
Computer Society (CS), is a technical and student chapter from IEEE, it dedicates itself to make progress on the areas related to computing, more information can be seen on Site CS.
          </div>
          <a href="https://www.computer.org/" style={{textDecoration:"none"}}> <div className="card_service_btn">Contact Us</div></a>
        </div>
        <div className="card_service">
          <img src={wielogo} className="svgicon" />
          <div className="card_service_head">WIE Affinity Group</div>
          <div className="card_service_body">
          IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects over 30,000 members to advance women in technology at all points in their lives and careers.
          </div>
          <a href="https://wie.ieee.org/" style={{textDecoration:"none"}}>  <div className="card_service_btn">Contact Us</div></a>
        </div>
        <div className="card_service">
          <img src={raslogo} className="svgicon" />
          <div className="card_service_head">RAS Chapter</div>
          <div className="card_service_body">
          The IEEE Robotics and Automation Society (IEEE RAS) is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation.
          </div>
          <a href="https://www.ieee-ras.org/" style={{textDecoration:"none"}}> <div className="card_service_btn">Contact Us</div></a>
        </div>
        <div className="card_service">
          <img src={caslogo} className="svgicon" />
          <div className="card_service_head">CAS Chapter</div>
          <div className="card_service_body">
          CAS focuses on the theory, analysis, design, and implementation of circuits and systems. The field spans theoretical foundations, applications, and circuits implementations of algorithms for signal processing.
          </div>
          <a href="https://ieee-cas.org/" style={{textDecoration:"none"}}><div className="card_service_btn">Contact Us</div></a>

        </div>
      </div>
    </div>
  );
}

export default Services;
