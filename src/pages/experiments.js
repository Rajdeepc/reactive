import React from "react"
import Layout from "../components/layout"
import { ExperimentsArray } from "../utils/constants"
import './experiments.css'
import { FaCodepen } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'

const Experiments = () => {
  return (
    <Layout>
      <div className="row">
        {(ExperimentsArray.codepen || []).map(item => {
          return (
            <div className="col-md-3" key={item.id}>
              <div className="exp-card">
                <div className="src-link text-center">
               
                  <div className="img-container">
                    <FaCodepen size={70}/>
                  </div>
                  <div className="title-container">
                    <h5>
                      {item.title}
                    </h5>
                  </div>
                  <div className="author-cotnainer">
                    A Pen by {item.author}
                  </div>
                  <div className="view-btn-row">
                  <div className="view-btn">
                  <a href={item.link} target="_blank"><FiEye/> View</a>
                  </div>
                  </div>
                 
                </div>
                <div>

                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Experiments
