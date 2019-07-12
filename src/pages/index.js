import React from "react"

import Layout from "../components/layout"
import "./page.css";


const IndexPage = () => (

  
  <Layout>
    <div className="mt20">
      <h3>
        Engineering Team Lead specialising in MERN Stack Development Lifecycle,
        Blockchain enthusiast.
      </h3>
      <h4>About Me : </h4>
      <p>
        I work as a MERN Stack Developer where I develop and implement solutions
        to complex business problems using multiple Front End frameworks and
        BackEnd frameworks/libraries leveraging scalable implementation with
        databases based on each specific business problems.{" "}
      </p>

      <h4>Full Stack Side Projects which i am currently building:</h4>
      <ul>
        <li>
          Stack Overflow for reusable assets - An open source platform which
          takes more filtered out search from StackOverflow giving developers
          spend less time finding solutions and more time coding the right
          stuff. Tech Stack: ReactJS, Redux, Node JS, Mongoose, MongoDB, Data
          Structures, Core JavaScript, Design Patterns.
        </li>

        <li>
          Project Management Tracker - A web portal which helps project
          supervisors manage tasks, assign and track tasks with single click
          email sending functionality. Say bye to searching through emails of
          all tasks of members. Tech Stack: Vue JS, VueX, Node JS, Mongoose,
          MongoDB
        </li>
      </ul>
      <h4>My Roles and Responsibilities:</h4>
      <p>
        My role involves building Web and Mobile solutions with JS frameworks
        and libraries. I implement Data Structures and Algorithms to find the
        best solutions and write readable code with frameworks/libraries like
        React JS(with Hooks),Redux, React Native, Vue JS, Node JS, MongoDB.
      </p>

      <h4>What I care about when i code:</h4>
      <p>
        Have experience with Secure Programming techniques with Front End
        libraries and have worked closely on adding security layers to API calls
        and interfacing the Front End Security. Web Accessibility, Clean and
        Unit Tested code
      </p>

      <h4>For Recruiters:</h4>
      <p>
        Actively looking for challenging roles where i can challenge myself
        everyday. Open to relocate anywhere.
      </p>

      <h4>Contact Me:</h4>
      <ul>
        <li>✧ Email: rajrock38@gmail.com</li>
        <li>✧ Phone: 9967883538 </li>
      </ul>

      <h4>Download CV:</h4>
      <a className="download" href='/CV.doc' download>Click to download</a>
    </div>
  </Layout>
)

export default IndexPage
