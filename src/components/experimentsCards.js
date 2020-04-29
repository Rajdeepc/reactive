import React from "react"
import './experiments.css'
import {js,code,app,project} from '../images/images';

import { FiEye } from 'react-icons/fi'


const ExperimentsCards = ({cardsArray = []}) => {

  const getIcons = (category) => {
      let image = '';
      switch(category){
          case 'js':
              image =  js
              break;
            case 'app':
                image =  app
                break;
            case 'code':
                image =  code
                break;
            case 'project':
                image =  project
                break;
            default:
                image =  ''
      }
      return image
  }
  return (
    <div className="row">
      {cardsArray.map(item => {
        return (
          <div className="col-md-3" key={item.id}>
            <div className="exp-card">
              <div className="src-link text-center">
                <div className="img-container">
                  <img src={getIcons(item.category)} alt={item.category}/>
                </div>
                <div className="title-container">
                  <h5>{item.title}</h5>
                </div>
                <div className="author-cotnainer">{item.desc}</div>
                <div className="view-btn-row">
                  <div className="view-btn">
                    <a href={item.link} target="_blank">
                      <FiEye /> View
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExperimentsCards;
