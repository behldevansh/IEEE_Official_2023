import React from "react";
import "./Awardcar.scss";
import img1 from "../award_images/Group 31.svg";
import img2 from "../award_images/Group 33.svg";
import img3 from "../award_images/Group 34.svg";
import img4 from "../award_images/Group 35.svg";
function Awardcar() {
  return (
    <div>
      <div class="slidera">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img2} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img3} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img4} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img1} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img2} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img3} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img4} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img1} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img2} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img3} className="img_award"/>
          </div>
          <div class="slide">
            <img src={img4} className="img_award"/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Awardcar;
