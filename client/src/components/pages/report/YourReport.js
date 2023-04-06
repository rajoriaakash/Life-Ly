<<<<<<< HEAD
import React, { useState } from 'react'
import myimage from '../../../images/Site Stats-rafiki.png';
=======
import React from 'react'
import myimage from '../../../images/report.png';
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
import newsimg from '../../../images/news.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './report.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../config.js';
import { useNavigate } from 'react-router-dom'


export default function YourReport(props) {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',

  })
  function handleChange(e) {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }


  const sendNewsletter = () => {
    axios.post(`${SERVER_URL}/send_email/newsletter`, user).then(res => {
      alert("Subscribed..Check your email!")
      console.log(res.data)
    })
  }


  let arr2 = ['Set up a schedule for your child.', "Praise them when they act appropriately or learn a new skill, being very specific about what behavior they're being praised for.", 'Carve out a private space in your home where your child can relax, feel secure, and be safe.', 'Schedule playtime when your child is most alert and awake.'];
  let arr1 = ['Seek professional help from a qualified healthcare provider, such as a psychiatrist or psychologist, who can diagnose ADHD and recommend appropriate treatment options.', 'Consider behavioral therapy, such as cognitive behavioral therapy (CBT) or parent training, to learn strategies for managing symptoms and improving behavior.', 'Explore medication options, such as stimulants or non-stimulants, which can help reduce symptoms of ADHD when used as part of a comprehensive treatment plan.', 'Create a structured environment with consistent routines and expectations, and provide positive reinforcement for desired behaviors to help your child with ADHD stay focused and on task.'];
  let arr3 = ["Seek professional help from a qualified healthcare provider, such as a neuropsychologist, who can diagnose dyslexia and recommend appropriate treatment options.", "Consider evidence-based interventions, such as Orton-Gillingham, Wilson Reading System, or multisensory structured language instruction, which can improve reading and writing skills in individuals with dyslexia.", "Encourage the use of assistive technologies, such as text-to-speech software or audiobooks, which can help individuals with dyslexia access written information more easily.", "Provide a supportive and understanding environment, with accommodations such as extra time for reading and writing tasks, to help individuals with dyslexia succeed academically and develop self-confidence."];
  let lines;
  const location = useLocation();
  const data = location.state;
  console.log(data)
  var disease;
  var dis;
  let t = Math.max(data.adhd_percent, Math.max(data.autism_percent, data.dyslexia_percent));
  if (t === data.adhd_percent) {
    lines = arr1;
    disease = "ADHD"
    dis = "adhd"
  }
  else if (t === data.autism_percent) {
    lines = arr2;
    disease = "Autism"
    dis = "adhd"
  }
  else {
    lines = arr3;
    disease = "Dyslexia"
    dis = "dyslexia"
  }
  const recommendDoctors = () => {
    navigate('/recommend/doctors', { state: { "disease": dis } })
  }
  const subscribe = () => {
    try {
      axios.post(`${SERVER_URL}/send_email/newsletter`, user).then(res => {
        console.log(res)
        // navigate('/surveyresult', { state: res.data}, );
      })
    } catch (e) {

    }
  }

  return (
    <>
      <div className="image-div">
        <img src={myimage} />
        <div className="image-text">
          <div className='w1'>Your Report</div>
          <div className='w2'>Know how probable is the disease...</div>
        </div>
      </div>
      <div className='action-section'>
        <div className='adhd'>
          <div className='dis '>
            <div className='dis1 dis-adhd'>ADHD</div>
            <div className='dis2 dis-adhd'>{data.adhd_percent}%</div>
          </div>
          <div className='btn' onClick={navigate('/recommend/doctors',{replace:true})}>Recommend doctor</div>
        </div>
        <div className='autism'>
          <div className='dis '>
            <div className='dis1 dis-aut'>Austism</div>
            <div className='dis2 dis-aut'>{data.autism_percent}%</div>
          </div>
          <div className='btn' onClick={navigate('/about',{replace:true})}>know about the disease</div>
        </div>
        <div className='dyslexia'>
          <div className='dis '>
            <div className='dis1 dis-dysl'>Dyslexia</div>
            <div className='dis2 dis-dysl'>{data.dyslexia_percent}%</div>
          </div>
          <div className='btn' onClick={navigate('/exercises',{replace:true})}>Recommend exercise</div>
        </div>
      </div>
      <div className="recommendation">
        <div className="btmpara">
          <div className='bth'>Recommendations for {disease}</div>
          <div className='list'>
            <ol start="1" style={{ listStylePosition: "inside" }}>
              {lines.map((line) => (
                <li style={{ marginBottom: "1em", lineHeight: "1.5em" }}>{line}<br /></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div id='newsletter' className='newsletter'>
        <img src={newsimg} alt="" className="newsimg" />
        <div className="rightsecnews">
          <div className="gpnews">
            <FontAwesomeIcon className="ic" icon={faEnvelope} />
            <input name='email' value={user.email} type="text" id="newslettermail" placeholder="Enter the Email" onChange={handleChange} />
          </div>
          <div className="subbtnsec">
            <input type='button' onClick={sendNewsletter}
              value='Subscribe'
              name='login' className="subbtn"></input>
          </div>
        </div>
      </div>
      {/* <div><h2>yash</h2></div> */}
=======
export default function YourReport(props) {
  let arr2=['Set up a schedule for your child.', "Praise them when they act appropriately or learn a new skill, being very specific about what behavior they're being praised for.", 'Carve out a private space in your home where your child can relax, feel secure, and be safe.', 'Schedule playtime when your child is most alert and awake.'];
  let arr1=['Seek professional help from a qualified healthcare provider, such as a psychiatrist or psychologist, who can diagnose ADHD and recommend appropriate treatment options.', 'Consider behavioral therapy, such as cognitive behavioral therapy (CBT) or parent training, to learn strategies for managing symptoms and improving behavior.', 'Explore medication options, such as stimulants or non-stimulants, which can help reduce symptoms of ADHD when used as part of a comprehensive treatment plan.', 'Create a structured environment with consistent routines and expectations, and provide positive reinforcement for desired behaviors to help your child with ADHD stay focused and on task.'];
  let arr3=[  "Seek professional help from a qualified healthcare provider, such as a neuropsychologist, who can diagnose dyslexia and recommend appropriate treatment options.",  "Consider evidence-based interventions, such as Orton-Gillingham, Wilson Reading System, or multisensory structured language instruction, which can improve reading and writing skills in individuals with dyslexia.",  "Encourage the use of assistive technologies, such as text-to-speech software or audiobooks, which can help individuals with dyslexia access written information more easily.",  "Provide a supportive and understanding environment, with accommodations such as extra time for reading and writing tasks, to help individuals with dyslexia succeed academically and develop self-confidence."];
  let lines;
  let t=Math.max(props.x,Math.max(props.y,props.z));
  if(t===props.x)lines=arr1;
  else if(t===props.y)lines=arr2;
  else lines=arr3
  return (
    <>
    <div className="image-div">
      <img src={myimage}/>
      <div className="image-text">
        <div className='w1'>Your Report</div>
        <div className='w2'>Know how probable is the disease...</div>
      </div>
    </div>
    <div className='action-section'>
      <div className='adhd'>
        <div className='dis '>
          <div className='dis1 dis-adhd'>ADHD</div>
          <div className='dis2 dis-adhd'>{props.x}%</div>
        </div>
        <div className='btn'>Recommend doctor</div>
      </div>
      <div className='autism'>
        <div className='dis '>
          <div className='dis1 dis-aut'>Austism</div>
          <div className='dis2 dis-aut'>{props.y}%</div>
        </div>
        <div className='btn'>know about the disease</div>
      </div>
      <div className='dyslexia'>
        <div className='dis '>
          <div className='dis1 dis-dysl'>Dyslexia</div>
          <div className='dis2 dis-dysl'>{props.z}%</div>
        </div>
        <div className='btn'>Recommend exercise</div>
      </div>
    </div>
    <div className="recommendation">
      <div className="btmpara">
      <div className='bth'>Recommendations for {props.disease}</div>
      <div className='list'>
      <ol start="1" style={{ listStylePosition: "inside" }}>
        {lines.map((line) => (
        <li style={{ marginBottom: "1em", lineHeight: "1.5em" }}>{line}<br/></li>
      ))}
      </ol>
      </div>
      </div>
    </div>
    <div id='newsletter' className='newsletter'>
          <img src={newsimg} alt="" className="newsimg" />
          <div className="rightsecnews">
          <div className="gpnews">
              <FontAwesomeIcon className="ic" icon={faEnvelope} />
              <input type="text" id="newslettermail" placeholder="Enter the Email" />
          </div>
          <div className="subbtnsec">
                    <button className="subbtn">Subscribe</button>
          </div>
          </div>
    </div>
    {/* <div><h2>yash</h2></div> */}
>>>>>>> 4315025b4fa753e405e6982f87901290e17494ed
    </>
  )
}
