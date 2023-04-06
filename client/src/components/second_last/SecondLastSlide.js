import React from "react";
// import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

import about1 from "../../images/about_1.png";
import about2 from "../../images/about_2.png";
import about3 from "../../images/about_3.png";
import about4 from "../../images/about_4.png";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";
export default function SecondLastSlide(props) {
  document.body.style.zoom = "50%";
  return (
    //col-md-6
    <>
      <Header></Header>
      <div className="container " style={{ maxWidth: "1600px" }}>
        <h1 className="heading">{props.title}</h1>

        <p></p>
        <img src={about1} className="img1" alt="about-1" />
        <div className="div11">
          <p className="para">
            <b>ADHD </b>
          </p>
          <p className="para">
            ADHD stands for attention deficit hyperactivity disorder. It’s a
            brain disorder that affects how you pay attention, sit still, and
            control your behavior. It happens in children and teens and can
            continue into adulthood.
          </p>
        </div>

        <div className="div2">
          <img src={about2} className="img2" alt="about-2" />
          <div className="div21">
            <p className="para">
              <b>Autism</b>
            </p>
            <p className="para">
              Autism spectrum disorder (ASD) is a developmental disability
              caused by differences in the brain. ASD begins before the age of 3
              years and can last throughout a person’s life, although symptoms
              may improve over time.
            </p>
          </div>
        </div>
        <div className="div3">
          <img src={about3} className="img3" alt="about-1" />
          <div className="div31">
            <p className="para">
              <b>Dyslexia</b>
            </p>
            <p className="para">
              Dyslexia is a learning disorder that involves difficulty reading
              due to problems identifying speech sounds and learning how they
              relate to letters and words (decoding).
            </p>
          </div>
        </div>
        <h1 className="heading2">Government Schemes</h1>
        <div className="div4">
          <img src={about4} className="img4" alt="about-4" />
          <li>DISHA - Early Intervention and School Readiness Scheme</li>
          <li>VIKAAS - Day Care</li>
          <li>SAMARTH - Respite Care</li>
          <li> GHARAUNDA - Group Home for Adults</li>
          <li> NIRAMAYA -Health Insurance Scheme</li>
          <li>SAHYOGI - Caregiver training Scheme</li>
          <li> GYAN PRABHA -Educational support</li>
          <li>PRERNA - Marketing Assistance</li>
          <li>SAMBHAV - Aids and Assistive</li>
          <li>Devices </li>
          <br />
          <b>ADIP Scheme </b>
          <br />
          <b>NHFDC</b>
        </div>
        <h1 className="heading2">Government Oppurtunities</h1>
        <div className="div5">
          <p className="para">
            The enactment of Right of Persons with Disabilities Act, 2016, had
            increased reservation in government jobs and educational
            institutions for disabled from 3 to 4% and the number of benchmark
            disabilities from seven to 21.
          </p>
        </div>
        <button type="button" className="btttn">
          Know more about Integrated Schools
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

SecondLastSlide.defaultProps = {
  title: "About the Diseases",
};
