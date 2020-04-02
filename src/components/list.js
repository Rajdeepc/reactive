import React from "react"
import CustomDate from "../components/customDate"
import { GoRepoForked, GoStar, GoRepo } from "react-icons/go"

const List = props => {

  const selectiveClassName = (language) => {
    switch(language){
      case 'JavaScript':
        return 'javaScript';
      case 'TypeScript':
        return 'typeScript';
      case 'HTML':
        return 'html'
      default:
        break;

    }
  }
  return (
    <>
      <div className="card-box-outline">
        <GoRepo />{" "}
        <a target="_blank" rel="noopener noreferrer" href={props.item.html_url}>
          {props.item.name}
        </a>
      </div>
      <div className="card-box-desc">
        <p>{props.item.description ? props.item.description : ""}</p>
      </div>
      <div>
        <div>
          {/* <small style={{ color: "rgba(0, 0, 0, 0.54)" }}>
          Last Updated:{" "}
          {props.item.updated_at ? CustomDate(props.item.updated_at) : ""}
        </small> */}
        </div>
        <div class="card-info">
          <ul>
            <li>
              <span class="d-inline-block mr-3">
              <span
                  className={`repo-language-color ${selectiveClassName(props.item.language)}`}
                ></span>
                <span itemprop="programmingLanguage">
                  {props.item.language}
                </span>
              </span>
            </li>
            <li>
              <span className="d-inline-block mr-3">
                
                <span>
                  <GoStar />{" "}
                </span>
                <span>{props.item.stargazers_count}</span>
              </span>
            </li>
            <li>
              <span className="d-inline-block mr-3">
                <span>
                  <GoRepoForked />
                </span>
                <span>{props.item.forks_count}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default List
