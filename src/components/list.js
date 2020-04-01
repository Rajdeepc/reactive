import React from "react"
import CustomDate from "../components/customDate"
import { GoRepoForked, GoStar, GoRepo } from "react-icons/go"

const List = props => (
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
                class="repo-language-color"
              ></span>
              <span itemprop="programmingLanguage">{props.item.language}</span>
            </span>
            
          </li>
          <li>
            <GoStar /> &nbsp;
            {props.item.stargazers_count}
          </li>
          <li>
            <GoRepoForked />
            &nbsp;
            {props.item.forks_count}
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default List
