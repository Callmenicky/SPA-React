import React from 'react';
import '../HomePage.css';

function Section3() {
  // Your component code here
  return (
    <div className = "section3">
      <h1>What We Do</h1>

    <div>
  <div className = "wwd_left">
    <div>01</div>
    <div className = "wwd_heading">Performance Marketing & Analytics</div>
    <div className = "wwd_text">
      Performance Media
      <div className="wwd_text_space"></div>
      Search Engine Optimisation
      <div className="wwd_text_space"></div>
      Web & App Analytics
      <div className="wwd_text_space"></div>
      Conversion Rate Optimisation Through Personalisation
      <div className="wwd_text_space"></div>
    </div>
    <div>
      <button className = "wwd_button" type="button">See more</button>
    </div>
  </div>

  <div className = "wwd_right">
      <img src="images/what_we_do.png" alt="What We Do"/>
  </div>
</div>

<div>
  <div className = "wwd_left_2">
    <img src="images/what_we_do.png" alt="What We Do"/>
  </div>
  
  <div className = "wwd_right_2 ">
      <div>02</div>
      <div className = "wwd_heading">Digital-First Creative</div>
      <div className = "wwd_text">
        Brand & Marketing Strategy
        <div className="wwd_text_space"></div>
        Content Hubs
        <div className="wwd_text_space"></div>
        Creative Services
        <div className="wwd_text_space"></div>
        Conversion Rate Optimisation Through Personalisation
        <div className="wwd_text_space"></div>
      </div>

      <div>
        <button className = "wwd_button" type="button">See more</button>
      </div>
  </div>
</div>

<div>
  <div className = "wwd_left">
    <div >03</div>
    <div className = "wwd_heading">Marketing Technology</div>
    <div className = "wwd_text">
      Technology Consulting
      <div className="wwd_text_space"></div>
      MarTech Deployment & Partnerships
      <div className="wwd_text_space"></div>
      Cloud Readiness & Migration
      <div className="wwd_text_space"></div>
      Mobile Development
      <div className="wwd_text_space"></div>
      Custom Web Development
      <div className="wwd_text_space"></div>
      Solution Architecture
    </div>
    <div>
      <button className = "wwd_button" type="button">See more</button>
    </div>
  </div>
  
  <div className = "wwd_right">
    <img src="images/what_we_do.png" alt="What We Do" />
  </div>
</div>

<div>
  <div className = "wwd_left_2">
    <img src="images/what_we_do.png" alt="What We Do" />
  </div>
  
  <div className = "wwd_right_2">  
    <div>04</div>
    <div className = "wwd_heading">Experience Design & Strategy</div>
    <div className = "wwd_text">
      Digital Transformation & Change Management
      <div className="wwd_text_space"></div>
      User Experience Strategy and design
      <div className="wwd_text_space"></div>
    </div>
    <div>
      <button className = "wwd_button" type="button">See more</button>
    </div>
  </div>
  
</div>
    </div>
  );
}

export default Section3;
