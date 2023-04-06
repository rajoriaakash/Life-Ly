import React from "react";
import { useState } from "react";
import myimage from "../../images/survey_img.png";
import "./style.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";

// import Option from "./Survey.js";

let results = [
  "1", "4", "1", "1", "1", "1", "1", "4", "4", "1", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4",
  "4", "4", "4", "4", "4"
];
=======

import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";
// import Option from "./Survey.js";

let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
const onClick = (e) => {
  const value1 = e.currentTarget.getAttribute("data-value1");
  const value2 = e.currentTarget.getAttribute("data-value2");
  console.log("Values1", value1);
  console.log("Values2", value2);
<<<<<<< HEAD
  results[value1] = value2;
  console.log(results);
=======
  check[value1 - 1] = "1";
  if (value1 == "1" || value1 == "7" || value1 == "8" || value1 == "10") {
    if (value2 == "1" || value2 == "2") {
      results[value1 - 1] = 1;
    } else {
      results[value1 - 1] = 0;
    }
  } else {
    if (value2 == "1" || value2 == "2") {
      results[value1 - 1] = 0;
    } else {
      results[value1 - 1] = 1;
    }
  }
  if (value1 == "0") {
    check[value1] = "1";
    if (value2 == "1") {
      results[value1 - 1] = 1;
      results[value1] = 0;
    } else {
      results[value1 - 1] = 0;
      results[value1] = 1;
    }
  }
  console.log(results);
  console.log(check);

  // results[value1] = value2;
  // console.log(results);
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
};
const RadioInput = ({
  label,
  value,
  checked,
  setter,
  questionno,
  questionop,
  color_code,
}) => {
  // console.log(color_code);
  return (
    <div>
      <div className="div1">
        <p className=" btn btn-primary bttn" style={{ background: color_code }}>
          {label}
        </p>
      </div>
      <div className="div2">
        <input
          type="radio"
          checked={checked == value}
          onChange={() => setter(value)}
          onClick={onClick}
          data-value1={questionno}
          data-value2={questionop}
        />
      </div>
    </div>
  );
};
export default function Survey(props) {
  document.body.style.zoom = "70%";
  const [question0, setquestion0] = React.useState();
  const [question1, setquestion1] = React.useState();
  const [question2, setquestion2] = React.useState();
  const [question3, setquestion3] = React.useState();
  const [question4, setquestion4] = React.useState();
  const [question5, setquestion5] = React.useState();
  const [question6, setquestion6] = React.useState();
  const [question7, setquestion7] = React.useState();
  const [question8, setquestion8] = React.useState();
  const [question9, setquestion9] = React.useState();
  const [question10, setquestion10] = React.useState();
<<<<<<< HEAD

  const handleSubmit = (e) => {
    // e.preventDefault();
    // let temp = 1;
    // console.log(check);
    // for (let i = 0; i < 11; i++) {
    //   if (check[i] == "0") temp = 0;
    // }
    // <Link
    //   to={{
    //     pathname: "/register",
    //     state: results,
    //   }}
    // >
    //   Register
    // </Link>;
    // if (temp == 1) console.log("successfully submitted");
    // else console.log("fill complete survey");
=======
  const [question11, setquestion11] = React.useState();
  const [question12, setquestion12] = React.useState();
  const [question13, setquestion13] = React.useState();
  const [question14, setquestion14] = React.useState();
  const [question15, setquestion15] = React.useState();
  const [question16, setquestion16] = React.useState();
  const [question17, setquestion17] = React.useState();
  const [question18, setquestion18] = React.useState();
  const [question19, setquestion19] = React.useState();
  const [question20, setquestion20] = React.useState();
  const [question21, setquestion21] = React.useState();
  const [question22, setquestion22] = React.useState();
  const [question23, setquestion23] = React.useState();
  const [question24, setquestion24] = React.useState();
  const [question25, setquestion25] = React.useState();
  const [question26, setquestion26] = React.useState();
  const [question27, setquestion27] = React.useState();
  const [question28, setquestion28] = React.useState();
  const [question29, setquestion29] = React.useState();
  const [question30, setquestion30] = React.useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = 1;
    console.log(check);
    for (let i = 0; i < 11; i++) {
      if (check[i] == "0") temp = 0;
    }
    if (temp == 1) console.log("successfully submitted");
    else console.log("fill complete survey");
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
    // const data = { question1, question2 };
    // const json = JSON.stringify(data, null, 4);
    // console.clear();
    // console.log(json);
  };

  return (
    <>
      <Header></Header>
      <div className="container" style={{ maxWidth: "2000px" }}>
        {/* <h1>Survey</h1> */}

        <div className="image-div">
          <img className="my_img" src={myimage} alt="my-img" />
          <div className="image-text">
            <div className="w1">Take The survey</div>
            <div className="w2">
              Give answers to some of our questions and get your child’s problem
              diagnosed.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>0. What is the gender of you child ?</p>
            <RadioInput
              label="Female"
              value="option1"
              checked={question0}
              setter={setquestion0}
              questionno="0"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Male"
              value="option2"
              checked={question0}
              setter={setquestion0}
              questionno="0"
              questionop="2"
              color_code="#F0A9A980"
            />
          </div>
          <div>
            <p>
              1. Does/did your child notice small sounds when others do not ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="3"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              2. Does/did your child usually concentrate more on the whole
              picture, rather than the small details ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              3. Does/did your child find it easy to do more than one thing at
              once ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              4. If there is an interruption, can he/she switch back to what
              he/she was doing very quickly?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              5. Can your child find it easy to ‘read between the lines’ when
              someone is talking to him/her?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              6. Can he know how to tell if someone listening to him/her is
              getting bored?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              7. Does your child find it difficult to work out the characters’
              intentions while reading the story?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              8. Does your child like to collect information about categories of
              things (e.g. types of car, types of bird, types of train, types of
              plant etc)?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              9. Does he find it easy to work out what someone is thinking or
              feeling just by looking at their face?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              10. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
<<<<<<< HEAD

          <Link
            state={{ data: results }}
            to={{
              pathname: "/register",
            }}
          >
            <button
              style={{ textDecoration: "none" }}
              className="btn btn-primary btn-lg sub_btn"
              type="submit"
            >
              NEXT
            </button>
          </Link>
=======
          <div>
            <p>11. Does your child become easily distracted?</p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              12.Does your child forget to do chores or lose school assignments?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question11}
              setter={setquestion11}
              questionno="12"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question11}
              setter={setquestion11}
              questionno="12"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question11}
              setter={setquestion11}
              questionno="12"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question11}
              setter={setquestion11}
              questionno="12"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              13. Does your child struggle to follow instructions or pay
              attention to details?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              14. Does your child have difficulty managing time or following
              through with tasks?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              15.Does your child become easily frustrated with difficult tasks?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              16. Does your child fidget or squirm and have trouble being still?
              Does it interfere with his education or ability to function
              socially?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              17. Does your child interrupt others or have trouble taking turns?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              18. Does your child talk rapidly and find it difficult to
              participate quietly?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              19. Does your child have trouble coping with stressful situations?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <div>
            <p>
              20. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              21. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              22. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              23. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              24. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              25. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              26. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              27. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              28. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              29. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              30. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <button className="btn btn-primary btn-lg sub_btn" type="submit">
            SUBMIT
          </button>
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

// import React from "react";

// import myimage from "../../images/survey_img.png";
// import "./style.css";
// import Header from "../Header.js";
// // import Option from "./Survey.js";
// let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// export default function Survey(props) {
//   const onClick = (e) => {
//     const value1 = e.currentTarget.getAttribute("data-value1");
//     const value2 = e.currentTarget.getAttribute("data-value2");
//     console.log("Values1", value1);
//     console.log("Values2", value2);
//     results[value1] = value2;
//     console.log(results);
//   };
//   return (
//     <>
//       <Header></Header>
//       <div className="container" style={{ maxWidth: "1800px" }}>
//         {/* <h1>Survey</h1> */}

//         <div className="image-div">
//           <img className="my_img" src={myimage} alt="my-img" />
//           <div className="image-text">
//             <div className="w1">Take The survey</div>
//             <div className="w2">
//               Give answers to some of our questions and get your child’s problem
//               diagnosed.
//             </div>
//           </div>
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={onClick}
//           data-value1="5"
//           data-value2="1"
//         />
//       </div>
//       {/* <Option></Option>
//       <Option></Option> */}
//     </>
//   );
// }
// //   <div className="btn-group btn-group-toggle" data-toggle="buttons">
// //     <label className="btn btn-secondary active">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option1"
// //         autocomplete="off"
// //         checked
// //       />{" "}
// //       Active
// //     </label>
// //     <label className="btn btn-secondary">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option2"
// //         autocomplete="off"
// //       />{" "}
// //       Radio
// //     </label>
// //     <label className="btn btn-secondary">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option3"
// //         autocomplete="off"
// //       />{" "}
// //       Radio
// //     </label>
// //   </div>;

// //   <input
// //     type="radio"
// //     className="btn-check"
// //     name="options"
// //     id="option1"
// //     autocomplete="off"
// //     checked
// //   />
// //   <label class="btn btn-secondary" HTMLfor="option1">
// //     Checked
// //   </label>

// {
//   /* <p>1. Do you often notice small sounds when others do not? </p>
//           <button
//             type="button"
//             className="btn btn-primary"
//             dataBsToggle="button"
//             autocomplete="off"
//           >
//             Toggle button
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary active"
//             dataBsToggle="button"
//             autocomplete="off"
//             aria-pressed="true"
//           >
//             Active toggle button
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary"
//             disabled
//             dataBsToggle="button"
//             autocomplete="off"
//           >
//             Disabled toggle button
//           </button> */
// }
