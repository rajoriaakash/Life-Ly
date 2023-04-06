import React from 'react'
import myimage from '../../../images/report.png';
import newsimg from '../../../images/news.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './report.css'
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
    </>
  )
}
