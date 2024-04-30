import React from "react";
import Navbar from "./Navbar";
import "./App.css";



function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I'm always eager to expand my horizons and stay abreast of the latest technologies and trends in the industry.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>CloudComputing - AWS,GCP</li>
          <li>PLC</li>
        </ul>
      </section>

      <section id="Work-Experience">
        <h2>Work Experience</h2>
        <ul>
          <li>1. Position: Quality Analyst<br></br>
              Company:  Nokia Solutions & Networks Pvt.Ltd<br></br>
              Location: Chennai,<br></br>
              Duration: Jul 2018 - Aug 2019</li>
              <br></br>
          <li>2. Position: L2 Service Engineer Trainee<br></br>
              Company:  Samsung India Electronics Pvt.Ltd<br></br>
              Location: Tirunelveli<br></br>
              Duration: Sept/2020 – AUG/2022</li>
        </ul>
      </section>






      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
  
          <h3>Integrated Electric Charging Station</h3>
          <p>
          Integration of non-renewable and renewable energy
sources to provide public charging stations for EVs and
handheld devices in the event of an immediate need in
public areas.
          </p>
          {/* <p>Technologies used: Java, Spring Boot, MySQL</p> */}
        </div>
        <div className="project">
          <h3>Fault Detection in Street Lights</h3>
          <p>
            The fault in the street lights will be identified automatically, and
            an alert notification will be sent to the control room to resolve
            the fault. This reduces the time delay in finding out the fault
            manually.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to get in touch!</p>
        <ul>
          <li>Email: er.sarav09@gmail.com</li>
          <li>Phone: +91 7871635235</li>
          <li>
            LinkedIn:{" "}
            <a
              href="www.linkedin.com/in/er-saravanan-0b8059266"
              target="_blank"
              rel="noopener noreferrer"
            >
              Saravanan N
            </a>
          </li>
        </ul>
      </section>
      <section id="co-curricular">
        <h2>Co-Curricular Activities</h2>
        <p>* Secured First Place in poster Presentation on "Smart shoes" at our Institution</p>
        <p>* Completed Two Phases of AR/VR by Metaverse</p>
        <p>* I have experience as the Secretary of the Entrepreneurship Development Cell in our Institution</p> 
        <p>* Presented our project at Hindustan institute of technology</p>  
      </section>
    </div>
  );
}

export default App;